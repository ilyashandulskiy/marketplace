import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    this.$use(async (params, next) => {
      if (params.model === 'product') {
        if (params.action == 'delete') {
          params.action = 'update';
          params.args['data'] = { deleted: true };
        }
        if (params.action == 'deleteMany') {
          params.action = 'updateMany';
          if (params.args.data != undefined) {
            params.args.data['hidden'] = true;
          } else {
            params.args['data'] = { deleted: true };
          }
        }
      }
      return next(params);
    });

    await this.$connect();
  }
}

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const configService: ConfigService = app.get(ConfigService);
  await app.listen(configService.get('PORT'));
  console.log('server started on port', configService.get('PORT'));
}
bootstrap();

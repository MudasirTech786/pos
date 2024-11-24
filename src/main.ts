import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  console.log('JWT_SECRET:', configService.get<string>('JWT_SECRET')); // Debug log

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
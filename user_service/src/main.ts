import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      port: 3001,
    },
  });
  app.startAllMicroservices();
  await app.listen(3001);
}
bootstrap();

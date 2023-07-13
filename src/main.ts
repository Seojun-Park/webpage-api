import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(4000);

  console.log('----------------------------------------------------------');
  console.log(`Server running on port 4000`);
  console.log('----------------------------------------------------------');
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { INestApplication } from '@nestjs/common';

let app: INestApplication;

async function bootstrap() {
  if (!app) {
    app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  }
  return app;
}

// Local development
if (process.env.NODE_ENV !== 'production') {
  bootstrap().then((a) => a.listen(process.env.PORT ?? 3000));
}

// Export for Vercel
export default async (req: any, res: any) => {
  const nestApp = await bootstrap();
  const instance = nestApp.getHttpAdapter().getInstance();
  instance(req, res);
};

import { RootModule } from '@di/root.module';
import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
async function bootstrap() {
  const app = await NestFactory.create(RootModule);

  app.enableVersioning({
    type: VersioningType.URI,
    prefix: 'v',
  });

  await app.listen(3000);
}
bootstrap();

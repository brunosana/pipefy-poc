import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HelloController } from '@presentation/http/v1/hello.controller';
import { PipefyController } from '@presentation/http/v1/pipefy.controller';
import { PipefyModule } from 'src/clients/pipefy/pipefy.module';
import { InfraModule } from './infra.module';

@Module({
  imports: [
    InfraModule,
    ConfigModule.forRoot(),
    PipefyModule.register({
      pipeId: process.env.PIPEFY_PIPE_ID,
      pipefy_token: process.env.PIPEFY_ACCESS_TOKEN,
      pipefy_url: process.env.PIPEFY_URL,
    }),
  ],
  controllers: [HelloController, PipefyController],
})
export class PresentationModule {}

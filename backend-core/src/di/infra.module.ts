import { PipefyModule } from '@clients/index';
import { PipefyInfraService } from '@infra/pipefy.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PipefyModule.register({
      pipeId: Number(process.env.PIPEFY_PIPE_ID),
      pipefy_token: process.env.PIPEFY_ACCESS_TOKEN,
      pipefy_url: process.env.PIPEFY_URL,
    }),
  ],
  providers: [PipefyInfraService],
  exports: [PipefyInfraService],
})
export class InfraModule {}

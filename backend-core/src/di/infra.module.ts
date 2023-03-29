import { PipefyModule } from '@clients/index';
import { PipefyData } from '@core/config/pipefy-data';
import { PipefyInfraService } from '@infra/pipefy.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PipefyTestsController } from '@presentation/http/v1/pipefy-tests.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PipefyModule.register({
      pipeId: Number(process.env.PIPEFY_PIPE_ID),
      pipefy_token: process.env.PIPEFY_ACCESS_TOKEN,
      pipefy_url: process.env.PIPEFY_URL,
    }),
  ],
  controllers: [PipefyTestsController],
  providers: [
    {
      provide: PipefyData,
      useValue: {
        pipeId: Number(process.env.PIPEFY_PIPE_ID),
        phaseWaiting: Number(process.env.PIPEFY_PHASE_WAITING),
        phaseError: Number(process.env.PIPEFY_PHASE_ERROR),
        phaseEnd: Number(process.env.PIPEFY_PHASE_END),
      },
    },
    PipefyInfraService,
  ],
  exports: [PipefyInfraService, PipefyData],
})
export class InfraModule {}

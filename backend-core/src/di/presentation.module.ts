import { Module } from '@nestjs/common';
import { HelloController } from '@presentation/http/v1/hello.controller';
import { PipefyController } from '@presentation/http/v1/pipefy.controller';
import { CoreModule } from './core.module';

@Module({
  imports: [CoreModule],
  controllers: [HelloController, PipefyController],
})
export class PresentationModule {}

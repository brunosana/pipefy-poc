import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PipefyModule } from 'src/clients/pipefy/pipefy.module';

@Module({
  imports: [],
})
export class InfraModule {}

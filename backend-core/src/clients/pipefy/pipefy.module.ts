import { DynamicModule, Module } from '@nestjs/common';
import { GraphQLClient } from 'graphql-request';
import { PipefyConfig } from './dtos/pipefy-config.dto';
import { AllWebhooks } from './graphql/all-webhooks/all-webhooks.graphql';
import { PipefyService } from './pipefy.service';

type PipefyModuleInput = {
  pipeId: string;
  pipefy_url: string;
  pipefy_token: string;
};

@Module({
  providers: [PipefyService],
  exports: [PipefyService],
})
export class PipefyModule {
  static register({
    pipeId,
    pipefy_url,
    pipefy_token,
  }: PipefyModuleInput): DynamicModule {
    return {
      module: PipefyModule,
      providers: [
        {
          provide: GraphQLClient,
          useFactory: () =>
            new GraphQLClient(pipefy_url, {
              headers: {
                Authorization: `Bearer ${pipefy_token}`,
              },
            }),
        },
        {
          provide: PipefyConfig,
          useValue: {
            pipeId,
          },
        },
        AllWebhooks,
      ],
    };
  }
}

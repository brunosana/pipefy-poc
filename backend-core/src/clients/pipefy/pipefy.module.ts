import { DynamicModule, Module } from '@nestjs/common';
import { GraphQLClient } from 'graphql-request';
import { PipefyConfig } from './dtos/pipefy-config.dto';
import { AllWebhooks } from './graphql/all-webhooks/all-webhooks.graphql';
import { CreateWebhook } from './graphql/create-webhook/create-webhook.graphql';
import { DeleteWebhook } from './graphql/delete-webhook/delete-webhook.graphql';
import { PipefyService } from './pipefy.service';

type PipefyModuleInput = {
  pipeId: number;
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
        CreateWebhook,
        DeleteWebhook,
      ],
    };
  }
}

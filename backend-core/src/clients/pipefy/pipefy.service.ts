import { Injectable } from '@nestjs/common';
import { PipefyConfig } from './dtos/pipefy-config.dto';
import { AllWebhooks } from './graphql/all-webhooks/all-webhooks.graphql';
import { CreateWebhook } from './graphql/create-webhook/create-webhook.graphql';
import { DeleteWebhook } from './graphql/delete-webhook/delete-webhook.graphql';

@Injectable()
export class PipefyService {
  constructor(
    private readonly pipefyConfig: PipefyConfig,
    private readonly allWebhooksRequest: AllWebhooks,
    private readonly createWebhookRequest: CreateWebhook,
    private readonly deleteWebhookRequest: DeleteWebhook,
  ) {}

  async allWebhooks() {
    return await this.allWebhooksRequest.execute({
      pipeId: this.pipefyConfig.pipeId,
    });
  }

  async createWebhook({ actions, name, url }: CreateWebhookInputDto) {
    return await this.createWebhookRequest.execute({
      actions,
      name,
      pipe_id: this.pipefyConfig.pipeId,
      url,
    });
  }

  async deleteWebhook(id: number) {
    return await this.deleteWebhookRequest.execute({
      id,
    });
  }
}

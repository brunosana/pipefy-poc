import { Injectable } from '@nestjs/common';
import { PipefyConfig } from './dtos/pipefy-config.dto';
import { AllWebhooks } from './graphql/all-webhooks/all-webhooks.graphql';

@Injectable()
export class PipefyService {
  constructor(
    private readonly pipefyConfig: PipefyConfig,
    private readonly allWebhooksRequest: AllWebhooks,
  ) {}

  async allWebhooks() {
    return await this.allWebhooksRequest.execute({
      pipeId: this.pipefyConfig.pipeId,
    });
  }
}

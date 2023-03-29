import { PipefyService } from '@clients/pipefy/pipefy.service';
import { Injectable } from '@nestjs/common';
import { CreateWebhookInfraDto } from './dtos/create-webhook.infra.dto';

@Injectable()
export class PipefyInfraService {
  constructor(private readonly pipefyService: PipefyService) {}

  async listAllWebhooks() {
    return await this.pipefyService.allWebhooks();
  }

  async createWebhook(input: CreateWebhookInfraDto) {
    return await this.pipefyService.createWebhook(input);
  }

  async deleteWebhook(id: number) {
    return await this.pipefyService.deleteWebhook(id);
  }
}

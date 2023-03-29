import { CreateWebhookUseCase } from '@core/create-webhook.usecase';
import { DeleteWebhookUseCase } from '@core/delete-webhook.usecase';
import { ListAllWebhooksUseCase } from '@core/list-all-webhooks.usecase';
import { Module } from '@nestjs/common';
import { InfraModule } from './infra.module';

@Module({
  imports: [InfraModule],
  providers: [
    ListAllWebhooksUseCase,
    CreateWebhookUseCase,
    DeleteWebhookUseCase,
  ],
  exports: [ListAllWebhooksUseCase, CreateWebhookUseCase, DeleteWebhookUseCase],
})
export class CoreModule {}

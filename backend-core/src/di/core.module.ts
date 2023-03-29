import { CreateWebhookUseCase } from '@core/create-webhook.usecase';
import { DeleteWebhookUseCase } from '@core/delete-webhook.usecase';
import { ListAllWebhooksUseCase } from '@core/list-all-webhooks.usecase';
import { UpdateEnergisaFieldsUseCase } from '@core/update-energisa-fields.usecase';
import { ValidateCardUseCase } from '@core/validate-card.usecase';
import { Module } from '@nestjs/common';
import { InfraModule } from './infra.module';

@Module({
  imports: [InfraModule],
  providers: [
    ListAllWebhooksUseCase,
    CreateWebhookUseCase,
    DeleteWebhookUseCase,
    ValidateCardUseCase,
    UpdateEnergisaFieldsUseCase,
  ],
  exports: [
    ListAllWebhooksUseCase,
    CreateWebhookUseCase,
    DeleteWebhookUseCase,
    UpdateEnergisaFieldsUseCase,
  ],
})
export class CoreModule {}

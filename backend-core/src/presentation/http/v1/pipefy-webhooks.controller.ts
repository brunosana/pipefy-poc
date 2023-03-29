import { UpdateEnergisaFieldsUseCase } from '@core/update-energisa-fields.usecase';
import { Body, Controller, Post } from '@nestjs/common';
import { NewCardWebhookPayload } from '../dtos/new-card.webhook.payload';

@Controller({
  version: '1',
  path: 'pipefy/webhooks',
})
export class PipefyWebhooksController {
  constructor(
    private readonly updateEnergisaFieldsUsecase: UpdateEnergisaFieldsUseCase,
  ) {}

  @Post('/newCard')
  async newCard(@Body() input: NewCardWebhookPayload) {
    await this.updateEnergisaFieldsUsecase.execute(input);
  }
}

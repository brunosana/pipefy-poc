import { Controller, Get } from '@nestjs/common';
import { PipefyService } from 'src/clients/pipefy/pipefy.service';

@Controller({
  version: '1',
  path: 'pipefy',
})
export class PipefyController {
  constructor(private readonly pipefyService: PipefyService) {}

  @Get('allWebhooks')
  async allWebhooks() {
    return await this.pipefyService.allWebhooks();
  }
}

export class NewCardWebhookPayload {
  data: {
    action: string;
    card: {
      id: number;
      pipe_id: string;
    };
  };
}

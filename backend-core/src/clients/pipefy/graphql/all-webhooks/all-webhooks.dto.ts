export type AllWebhooksInput = {
  pipeId: string;
};

export type AllWebhooksOutput = {
  webhooks: {
    id: string;
    actions: string[];
    url: string;
    email: string;
    headers: string;
  }[];
};

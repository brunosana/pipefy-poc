import { RegisterEntity } from "@/entities/register.entity";
import { WebhookEntity } from "@/entities/webhook.entity";
import { baseRequest } from "./request";

export const getAllWebhooks = async (): Promise<WebhookEntity[]> => {
  return await baseRequest.get('/v1/pipefy/allwebhooks')
  .then(data => data.data?.webhooks)
  .catch(err => {
    throw err;
  })
}

export const getAllCards = async (): Promise<RegisterEntity[]> => {
  return await baseRequest.get('/v1/pipefy/tests/allcards')
  .then(data => data.data?.cards)
  .catch(err => {
    throw err;
  })
}

export const deleteWebhook = async (id: string): Promise<void> => {
  await baseRequest.delete(`/v1/pipefy/deletewebhook/${id}`)
  .catch(err => {
    throw err;
  })
}

const coreApi = {
  getAllWebhooks,
  getAllCards,
  deleteWebhook,
}

export { coreApi };

import { coreApi } from '@/api/core.api';
import { WebhookEntity } from '@/entities/webhook.entity';
import React, { useState } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import { Button } from '../Button';
import { 
    Container,
    Webhook,
    WebhookInfo,
    WebhookHead,
    WebhooksWrapper,
    WebhookMessage
} from './styles';

const Webhooks: React.FC = () => {

    const [webhooks, setWebhooks] = useState<WebhookEntity[]>([]);
    const [message, setMessage] = useState('Clique em fech para fazer a pesquisa');

    const getAllWebhooks = async () => {
        setMessage('Carregando...');
        coreApi
        .getAllWebhooks()
        .then(data => {
            setWebhooks(data)
            if(data.length <=0) {
                setMessage('Não foram encontrados webhooks');
            }
        })
        .catch(err => {
            setMessage(`Error: ${err.message}`)
        })
    }

    const deleteWebhook = async (id: string) => {
        coreApi
            .deleteWebhook(id)
            .then(() => getAllWebhooks())
            .catch(err => {throw err});
    }

    return (
        <Container>
            <Button onClick={getAllWebhooks} >FETCH</Button>
            <WebhooksWrapper>
                <WebhookHead>
                    <WebhookInfo>ID</WebhookInfo>
                    <WebhookInfo>ACTIONS</WebhookInfo>
                    <WebhookInfo>URL</WebhookInfo>
                    <WebhookInfo>HEADERS</WebhookInfo>
                </WebhookHead>
                { webhooks.length <=0 && <WebhookMessage>{message}</WebhookMessage>}
                {
                    webhooks.map(webhook => 
                    <Webhook key={webhook.id}>
                        <WebhookInfo>{webhook.id}</WebhookInfo>
                        <WebhookInfo>{JSON.stringify(webhook.actions)}</WebhookInfo>
                        <WebhookInfo>{webhook.url}</WebhookInfo>
                        <WebhookInfo>{webhook.headers}</WebhookInfo>
                        <WebhookInfo>
                            <BsFillTrashFill onClick={() => deleteWebhook(webhook.id)} />
                        </WebhookInfo>
                    </Webhook>
                    )
                }
            </WebhooksWrapper>
        </Container>
    );
}

export { Webhooks };
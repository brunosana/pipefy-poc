import { WebhookEntity } from '@/entities/webhooks.entity';
import React, { useState } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import { Button } from '../Button';
import { 
    Container,
    Webhook,
    WebhookInfo,
    WebhookHead,
    WebhooksWrapper,
} from './styles';

const Webhooks: React.FC = () => {

    const [webhooks, setWebhooks] = useState<WebhookEntity[]>([
        {
            id: '123',
            actions: ['card.create'],
            email: 'test',
            url: '123',
            headers: '{}'
        },
        {
            id: '123',
            actions: ['card.create'],
            email: 'test',
            url: '123',
            headers: '{}'
        }
    ]);

    return (
        <Container>
            <Button>FETCH</Button>
            <WebhooksWrapper>
                <WebhookHead>
                    <WebhookInfo>ID</WebhookInfo>
                    <WebhookInfo>ACTIONS</WebhookInfo>
                    <WebhookInfo>URL</WebhookInfo>
                    <WebhookInfo>HEADERS</WebhookInfo>
                </WebhookHead>
                {
                    webhooks.map(webhook => 
                    <Webhook key={webhook.id}>
                        <WebhookInfo>{webhook.id}</WebhookInfo>
                        <WebhookInfo>{JSON.stringify(webhook.actions)}</WebhookInfo>
                        <WebhookInfo>{webhook.url}</WebhookInfo>
                        <WebhookInfo>{webhook.headers}</WebhookInfo>
                        <WebhookInfo>
                            <BsFillTrashFill />
                        </WebhookInfo>
                    </Webhook>
                    )
                }
            </WebhooksWrapper>
        </Container>
    );
}

export { Webhooks };
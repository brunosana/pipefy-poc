import { coreApi } from '@/api/core.api';
import { RegisterEntity, RegisterField } from '@/entities/register.entity';
import React, { useState } from 'react';
import { Button } from '../Button';

import {
    Container,
    Register,
    RegisterHead,
    RegisterInfo,
    RegistersWrapper,
    RegisterMessage
} from './styles';

const Registers: React.FC = () => {

    const [registers, setRegisters] = useState<RegisterEntity[]>([]);
    const [message, setMessage] = useState('Clique em fech para realizar a requisição!');

    const isError = (input: RegisterEntity) => {
        return input.currentPhase === 'erro';
    }

    const getError = (fields: RegisterField[]) => {
        return fields.find(field => field.field.id === 'motivo');
    }

    const getAllCards = async () => {
        setMessage('Carregando...');
        coreApi
        .getAllCards()
        .then(data => {
            setRegisters(data)
            if(data.length <=0) {
                setMessage('Não foram encontrados registros');
            }
        })
        .catch(err => {
            setMessage(`Error: ${err.message}`)
        })
    }

    return(
        <Container>
            <Button onClick={getAllCards} >FETCH</Button>
            <RegistersWrapper>
                <RegisterHead>
                    <RegisterInfo>ID</RegisterInfo>
                    <RegisterInfo>TITLE</RegisterInfo>
                    <RegisterInfo>STATUS</RegisterInfo>
                    <RegisterInfo>ERRO</RegisterInfo>
                </RegisterHead>
                { registers.length <= 0 && <RegisterMessage>{message}</RegisterMessage>}
                {
                    registers.map(register =>
                    <Register key={register.id}>
                        <RegisterInfo>{register.id}</RegisterInfo>
                        <RegisterInfo>{register.title}</RegisterInfo>
                        <RegisterInfo>{register.currentPhase}</RegisterInfo>
                        <RegisterInfo>{isError(register) ? getError(register.fields)?.value : '-'}</RegisterInfo>
                    </Register>
                    )
                }
            </RegistersWrapper>
        </Container>
    )
};

export { Registers };
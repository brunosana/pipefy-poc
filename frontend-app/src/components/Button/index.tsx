import React from 'react';

import {
    Container
} from './styles';

interface ButtonProps {
    children?: React.ReactNode;
    onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, ...props }) => {
    return (
        <Container onClick={onClick} {...props}>
            {children}
        </Container>
    )
}
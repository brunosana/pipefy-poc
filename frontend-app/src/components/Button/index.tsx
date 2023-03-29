import React from 'react';

import {
    Container
} from './styles';

interface ButtonProps {
    children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <Container {...props}>
            {children}
        </Container>
    )
}
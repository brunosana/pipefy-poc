import React from 'react';
import { 
    MdWebhook,
    MdAppRegistration,
    MdOutlinePlumbing,
    MdOutlineVideoCameraFront
} from 'react-icons/md';
import {
    Container,
    MenuItem
} from './styles'

enum ActiveMenu {
    'webhooks' = 0,
    'registros' = 1,
    'testes' = 2,
    'live' = 3
}

type MenuProps = {
    active: ActiveMenu;
    setActive: (input: ActiveMenu) => void;
}

const Menu: React.FC<MenuProps> = ({ active, setActive }) => {
    return (
        <Container>
            <MenuItem
                active={active === 0}
                onClick={() => setActive(ActiveMenu.webhooks)}
            >
                <MdWebhook/>
                Webhooks
            </MenuItem>
            <MenuItem
                active={active === 1}
                onClick={() => setActive(ActiveMenu.registros)}
            >
                <MdAppRegistration/>
                Registros
            </MenuItem>
            <MenuItem
                active={active === 2}
                onClick={() => setActive(ActiveMenu.testes)}
            >
                <MdOutlinePlumbing/>
                Testes
            </MenuItem>
            <MenuItem
                active={active === 3}
                onClick={() => setActive(ActiveMenu.live)}
            >
                <MdOutlineVideoCameraFront/>
                Live
            </MenuItem>
        </Container>
    )
}

export { Menu, ActiveMenu };
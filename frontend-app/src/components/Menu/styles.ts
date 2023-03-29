import styled, { css } from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
`;

type MenuItemProps = {
    active?: boolean;
}

export const MenuItem = styled.div<MenuItemProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 0.1s;
    ${({ active }) => active && css`
        color: #fff;
        svg {
            color: #fff;
        }
    `}
    svg {
        font-size: 2rem;
        margin-bottom: 0.3rem;
    }
    font-size: 1.3rem;
    margin: 0 1rem;
    margin-top: 1rem;

    &:hover {
        transform: scale(1.1);
        cursor: pointer;
        ${({ active }) => !active && css`
            color: #1C82AD;
            svg {
                color: #1C82AD;
            }
        `};
    }
`;
import styled from "styled-components";

export const Container = styled.button`
    margin-bottom: 2rem;
    width: 20rem;
    padding: 1rem;
    font-size: 1.1rem;
    border-radius: 0.6rem;
    border: none;
    font-weight: 700;
    background-color: #03C988;
    color: #13005A;
    transition: 0.1s;
    
    &:hover {
        cursor: pointer;
        color: #fff;
        background-color: #1C82AD;
        transform: scale(1.05);
    }
    
    &:active {
        transform: scale(0.95);
    }
`;
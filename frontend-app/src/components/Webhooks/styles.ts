import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
`;

export const WebhooksWrapper = styled.div`
    width: 70%;

    @media screen and (max-width: 1390px){
        width: 95%;
    }

`;

export const WebhookHead = styled.div`
  padding: 1rem 2rem;
  border-radius: 0.6rem;
  display: grid;
  grid-template-columns: 0.2fr 0.35fr 1fr 0.4fr 0.05fr;
  align-items: center;
  font-weight: 700;
`;

export const Webhook = styled.div`
  background-color: #00337C;
  padding: 1rem 2rem;
  border-radius: 0.6rem;
  display: grid;
  grid-template-columns: 0.2fr 0.35fr 1fr 0.4fr 0.05fr;
  align-items: center;
  color: #fff;
  transition: 0.1s;

  svg {
    color: #fff;
  }
  svg:hover {
    color: #13005A;
    cursor: pointer;
  }

  &:hover {
    background-color: #1C82AD;
  }

  & + & {
    margin-top: 1rem;
  }
`;

export const WebhookInfo = styled.p`
    text-overflow: ellipsis;
`;
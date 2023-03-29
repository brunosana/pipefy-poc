import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
`;

export const RegistersWrapper = styled.div`
    width: 70%;

    @media screen and (max-width: 1390px){
        width: 95%;
    }

`;

export const RegisterHead = styled.div`
  padding: 1rem 2rem;
  border-radius: 0.6rem;
  display: grid;
  grid-template-columns: 0.2fr 1fr 0.4fr 0.4fr;
  align-items: center;
  font-weight: 700;
`;

export const Register = styled.div`
  background-color: #00337C;
  padding: 1rem 2rem;
  border-radius: 0.6rem;
  display: grid;
  grid-template-columns: 0.2fr 1fr 0.4fr 0.4fr;
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

export const RegisterMessage = styled.p`
    text-align: center;
    margin-top: 2rem;
`;
export const RegisterInfo = styled.p`
    text-overflow: ellipsis;
`;
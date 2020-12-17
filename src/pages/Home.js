import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

export default function Home() {
    const history = useHistory();
    return (
        <Container>
            <Button onClick={() => history.push('/consultar-provas')}>Consultar Provas</Button>
            <Button onClick={() => history.push('/enviar-provas')}>Enviar Provas<br/>Anonimamente</Button>
        </Container>
    );
}

const Container = styled.section `
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

`;
const Button = styled.button `
    height: 30%;
    border-radius: 20%;
    padding: 25px;
    margin: 15px;
    background-color: rgba(233, 157, 211, 0.15);
    font-family: 'Righteous', cursive;
    font-size: 25px;
`;
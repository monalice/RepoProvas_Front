import React, { useState } from 'react';
import styled from 'styled-components';

export default function SendTests() {
    const [ nameTest, setNameTest ] = useState('');
    const [ typeTest, setTypeTest ] = useState('');
    const [ subject, setSubject] = useState('');
    const [ teacher, setTeacher ] = useState('');
    const [ linkTest, setLinkTest ] = useState('');
    return (
        <Container>
            <h1>Enviar Prova</h1>
            <FormContainer>
                <label>Nome da Prova:</label>
                <input name='test name' type='text' placeholder='Ex: 2020.1' onChange={e => setNameTest(e.target.value)} /><br/>

                <label name="typeTest">Escolha o tipo da prova:</label>
                <select name="typeTest">
                    <option value="P1">P1</option>
                    <option value="P2">P2</option>
                    <option value="P3">P3</option>
                    <option value="Final">Final</option>
                    <option value="2ch">2ª Chamada</option>
                    <option value="outras">Outras</option>
                </select><br/>

                <label>Matéria:</label>
                <select name="subject">
                    {/*map das materias do banco para as options*/}
                </select><br/>

                <label>Professor(a):</label>
                <select name="teacher">
                    {/*map dos profs do banco para as options*/}
                </select><br/>

                <label>Link:</label>
                <input name='link' type='url' placeholder='Link para o PDF' onChange={e => setLinkTest(e.target.value)} /><br/>
            </FormContainer>
        </Container>
    );
}

const Container = styled.section `
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
        font-family: 'Bungee Outline', cursive;
        font-size: 90px;
        text-align: center;
    }
`;

const FormContainer = styled.form `
    width: 45%;
    height: 40%;
    padding: 30px 8%;
    margin: 20px 0;
    background: linear-gradient(-120deg, rgba(231, 126, 200, 0.459), rgba(223, 198, 198, 0.459));
    border-radius: 10px;


    input, select {
        padding: 5px;
        margin-bottom: 10px;
        margin-left: 20px;
        border-radius: 5px;
        background: #FFF;
    }
`;


{/* <option value="P1">P1</option>
<option value="P2">P2</option>
<option value="P3">P3</option>
<option value="Final">Final</option>
<option value="2ch">2ª Chamada</option>
<option value="outras">Outras</option> */}
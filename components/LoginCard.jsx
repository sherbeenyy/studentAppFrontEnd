import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 30px;
  width: 700px;
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.1);
`;

const Header = styled.h1
   ` font-size: 24px;
    margin-bottom: 20px;
    color: #001A6E;
    `;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10px;
`;

const Label = styled.label`
  margin-bottom: 5px;
    font-size: 12px;
  `;

const Input = styled.input`
  padding: 10px;
  width: 300px;
  border: none;
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.1);
  `;

const Button = styled.button`
  padding: 10px;
  margin: 10px;
  width: 300px;
  border: none;
  border-radius: 10px;
  background-color: #001A6E;
  color: white;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.4);
    border: none;
  }
`;

const SwitchContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const SwitchButton = styled.button`
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: ${(props) => (props.position === 'left' ? '10px 0 0 10px' : '0 10px 10px 0')};
  background-color: ${(props) => (props.selected ? '#e0dede' : '#ffffff')};
  color: black;
  
  cursor: pointer;
`;

const LoginCard = () => {
  const [selected, setSelected] = useState('student');

  return (
    <Container>
      <Header>Login</Header>
      <SwitchContainer>
        <SwitchButton
          position="left"
          selected={selected === 'parent'}
          onClick={() => setSelected('parent')}
        >
          Parent
        </SwitchButton>
        <SwitchButton
          position="right"
          selected={selected === 'student'}
          onClick={() => setSelected('student')}
        >
          Student
        </SwitchButton>
      </SwitchContainer>
      <h5>{selected === 'parent' ? 'Login as a Parent' : 'Login as a Student'}</h5>
      <InputContainer>
        <Label>Email:</Label>
        <Input type="text" placeholder="Email" required />
      </InputContainer>
      <InputContainer>
        <Label>Password:</Label>
        <Input type="password" placeholder="Password" required />
      </InputContainer>
      <Button type="submit">Login</Button>
    </Container>
  );
}

export default LoginCard;
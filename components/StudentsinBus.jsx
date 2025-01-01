import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

const InnerDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
`;

const Item = styled.li`
  width: 50%;
  list-style-type: circle;
  margin-bottom: 8px;
  font-family: Arial, sans-serif;
  font-size: 16px;
  color: #333;
`;

const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  color: #001A6E;
  text-align: center;
  margin-bottom: 20px;
`;

const StudentsinBus = () => {
  const students = ['Ahmed', 'moahed', 'ayman', 'asdasd', 'asda', 'asdasd', 'asdas', 'asdas', 'asd', 'asdas'];
  
  return (
    <Container>
      <Title>Students in Bus</Title>
      <InnerDiv>
        {students.map(student => (
          <Item key={student}>{student}</Item>
        ))}
      </InnerDiv>
    </Container>
  );
}

export default StudentsinBus;

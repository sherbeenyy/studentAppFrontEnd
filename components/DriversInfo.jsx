import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    width: 300px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 5px;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.1);
`
const Header = styled.h3`
    color: #001A6E;
    margin-bottom: 10px;
    
`
const Paragraph = styled.p`
    font-size: 14px;
    margin-bottom: 5px;
    color: #333;
    `

const CarInfo = ()=>{
    return (
        <>
        <Container> 
            <Header>Driver's Information</Header>
            <Paragraph>Name: Ashraf</Paragraph>
            <Paragraph>Mobile Number: 012345678</Paragraph>
        </Container>
        </>
    )
}
export default CarInfo;
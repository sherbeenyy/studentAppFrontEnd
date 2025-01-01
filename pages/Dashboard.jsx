import React from 'react';
import styled from 'styled-components';
import CarInfo from "../components/CarInfo";
import DriversInfo from "../components/DriversInfo";
import Path from "../components/Path";
import StudentsinBus from "../components/StudentsinBus";

const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  gap: 20px;
  padding: 20px;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
`;

const GridSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

const UpperLeft = styled(GridSection)`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
`;

const UpperRight = styled(GridSection)`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  flex-direction: column;
  gap: 20px;
`;

const Bottom = styled(GridSection)`
  grid-column: 1 / 3;
  grid-row: 2 / 3;
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <UpperLeft>
        <StudentsinBus />
      </UpperLeft>
      <UpperRight>
        <DriversInfo />
        <CarInfo />
      </UpperRight>
      <Bottom>
        <Path />
      </Bottom>
    </DashboardContainer>
  );
};

export default Dashboard;

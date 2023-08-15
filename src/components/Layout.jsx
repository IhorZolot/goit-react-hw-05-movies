import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { NavBar } from './NavBar';

export const Layout = () => {
  return (
    <LayoutWrapper>
      <NavBar />
      <WrapperOutlet>
        <Outlet />
      </WrapperOutlet>
      <footer>Welcome</footer>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr;
`;
const WrapperOutlet = styled.div`
  padding: 20px;
  padding-left: 290px;
`;

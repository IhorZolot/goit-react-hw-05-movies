import React, { Suspense } from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { NavBar } from './NavBar';

export const Layout = () => {
  return (
    <LayoutWrapper>
      <NavBar />
      <WrapperOutlet>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
        </Suspense>
      </WrapperOutlet>
      <Footer>Movies</Footer>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr;
`;
const WrapperOutlet = styled.div``;

const Footer = styled.footer`
  background-color: #eee1f8;
  box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.5);
  gap: 25px;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 20px 20px;
`;

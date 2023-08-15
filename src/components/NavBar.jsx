import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavBar = () => {
  return (
    <SideBar>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/movies">Movies</StyledLink>
    </SideBar>
  );
};

export const SideBar = styled.nav`
  background-color: #eee1f8;
  box-shadow: 0px 2px 4px rgba(0, 0, 0.1, 0.5);
  display: flex;
  gap: 25px;
  /* position: fixed; */
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 0;
  justify-content: left;
`;

export const StyledLink = styled(NavLink)`
  margin-left: 40px;
  font-size: 20px;
  text-decoration: none;
  color: #160909;
  font-weight: bold;

  &.active {
    color: #ff006f;
  }
`;

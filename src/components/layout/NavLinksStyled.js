import styled from "styled-components";

export const NavStyled = styled.nav`
  width: 50%;

  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    width: 70%;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  font-size: 1.1em;

  a {
    padding: 5px;
    font-weight: 700;

    :hover {
      color: #ffb819;
      transition: ease-in-out 0.4s;
    }
  }
`;

export const NavItem = styled.li``;

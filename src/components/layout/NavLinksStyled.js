import styled from "styled-components";

export const NavStyled = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.primaryLight};
  opacity: ${({ open }) => (open ? "1" : "0")};
  visibility: ${({ open }) => (open ? "inherit" : "hidden")};
  transition: opacity ease-in-out 0.6s;
  transition: 400ms linear;
  z-index: 10;
`;

// old nav
/* export const NavStyled = styled.nav`
  width: 50%;

  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    width: 70%;
  }
`; */

export const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2em;

  a {
    font-weight: ${({ theme }) => theme.fontBold};

    :hover {
      color: #ffb819;
      transition: ease-in-out 0.2s;
    }
  }
`;

// old UL
/* export const NavList = styled.ul`
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
`; */

export const NavItem = styled.li`
  margin-bottom: 4vmin;
  opacity: ${({ open }) => (open ? "1" : "0")};
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(5rem)")};
  transition: all 600ms ease-in-out;
  :nth-child(1) {
    transition-delay: ${({ open }) => (open ? "100ms" : "600ms")};
  }
  :nth-child(2) {
    transition-delay: ${({ open }) => (open ? "200ms" : "600ms")};
  }
  :nth-child(3) {
    transition-delay: ${({ open }) => (open ? "300ms" : "600ms")};
  }
  :nth-child(4) {
    transition-delay: ${({ open }) => (open ? "400ms" : "600ms")};
  }
  :nth-child(5) {
    transition-delay: ${({ open }) => (open ? "500ms" : "600ms")};
  }
  :nth-child(6) {
    transition-delay: ${({ open }) => (open ? "600ms" : "600ms")};
  }
`;

import styled from "styled-components";

export const StyledNav = styled.div`
  position: fixed;
  height: 10vh;
  width: 100%;
  padding: ${({ theme }) => theme.paddingMain};
  background-color: ${({ theme }) => theme.primaryLight};
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    padding: ${({ theme }) => theme.paddingMobile};
  }
`;

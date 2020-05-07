import styled from "styled-components";

export const FooterStyled = styled.div`
  position: fixed;
  bottom: 0;
  min-height: 10vh;
  width: 100vw;
  margin: 0 auto;
  padding: ${({ theme }) => theme.paddingMain};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.primaryLight};
  border-top: 1px solid #f6f6f6;

  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    position: unset;
    padding: ${({ theme }) => theme.paddingMobile};
  }
`;

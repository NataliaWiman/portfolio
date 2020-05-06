import styled from "styled-components";

export const FooterStyled = styled.div`
  position: fixed;
  bottom: 0;
  min-height: 10vh;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.primaryLight};
  border-top: 1px solid #f6f6f6;
`;

export const FooterCredit = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 0.8em;
  letter-spacing: 0;
  color: #303030;
`;

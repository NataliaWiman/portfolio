import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  font-family: inherit;
  font-size: 1em;
  font-weight: 700;
  letter-spacing: 1px;
  border: 0;
  cursor: pointer;
  outline: 0;

  background: ${(props) =>
    props.primary
      ? ({ theme }) => theme.primaryDark
      : ({ theme }) => theme.primaryAccent};
  color: ${(props) =>
    props.primary
      ? ({ theme }) => theme.primaryAccent
      : ({ theme }) => theme.primaryDark};

  &:hover,
  &:focus {
    box-shadow: 0px 10px 30px -15px rgba(0, 0, 0, 0.75);
    transition: 0.3s ease-in-out;
  }
`;

export const StyledA = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  font-family: inherit;
  font-size: 1em;
  font-weight: 700;
  letter-spacing: 1px;
  border: 0;
  cursor: pointer;
  outline: 0;

  background: ${(props) =>
    props.primary
      ? ({ theme }) => theme.primaryDark
      : ({ theme }) => theme.primaryAccent};
  color: ${(props) =>
    props.primary
      ? ({ theme }) => theme.primaryAccent
      : ({ theme }) => theme.primaryDark};

  &:hover,
  &:focus {
    box-shadow: 0px 10px 30px -15px rgba(0, 0, 0, 0.75);
    transition: 0.3s ease-in-out;
  }
`;

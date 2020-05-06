import styled from "styled-components";
import { StyledA } from "../styled/Button";

export const StyledAEdited = styled(StyledA)`
  margin-right: 10px;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ItemWrapper = styled.div`
  display: flex;

  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const Item = styled.li`
  width: 100%;
  padding: 5vh 0;
`;

export const ItemContent = styled.div`
  margin-left: 5vw;
  margin-bottom: 5vh;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

export const ItemTitle = styled.h3`
  margin: 0;
  margin-bottom: 2vmin;
  font-family: "Comfortaa", sans-serif;
  font-weight: 700;
  font-size: 2em;
`;

export const ItemInfo = styled.p`
  margin: 15px 0;
  margin-bottom: 2vmin;
`;

export const ItemType = styled.p`
  margin: 15px 0;
  margin-bottom: 2vmin;
  color: ${({ theme }) => theme.primaryGrey};
`;

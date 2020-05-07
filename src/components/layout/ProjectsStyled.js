import styled from "styled-components";
import { StyledA } from "../styled/Button";

export const StyledAEdited = styled(StyledA)`
  margin-right: 10px;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  width: 40%;
  padding: 5vh 0;

  :nth-child(1),
  :nth-child(3),
  :nth-child(5) {
    margin-right: 50px;

    @media screen and (max-width: ${({ theme }) => theme.mobile}) {
      margin-right: 0;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemContent = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    padding: ${({ theme }) => theme.paddingMobile};
  }
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

export const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 2vmin;

  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: 10vmin;
  }
`;

export const Image = styled.img`
  width: 60%;
  padding: 3em;
  background-color: #f8f8f8;
  object-fit: scale-down;
`;

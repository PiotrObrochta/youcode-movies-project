import styled from "styled-components";

export const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 24px;
  max-width: 1368px;
  max-height: 1391px;
  margin: 0 auto;
  padding: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 16px;
    padding: 16px;
  }
`;

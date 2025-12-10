import styled from "styled-components";

export const ListWrapper = styled.div`
  width: 100%;
  max-width: 1368px;
  min-height: 1391px;

  margin: 0 auto;
  padding: 20px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 24px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100%;
  max-width: 1368px;
  margin: 0 auto;
  padding: 20px;
`;

export const PageTitle = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 24px;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 24px;
    margin-bottom: 16px;
    text-align: center;
  }
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

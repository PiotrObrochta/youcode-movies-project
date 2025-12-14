import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 24px;
  box-sizing: border-box;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1368px;
  display: flex;
  flex-direction: column;
`;

export const PageTitle = styled.h1`
  font-size: 36px;
  font-weight: 600;
  line-height: 120%;
  color: ${({ theme }) => theme.colors.black};
  margin: 24px 0;
  text-align: left;

  @media (max-width: 767px) {
    font-size: 18px;
    margin-bottom: 16px;
  }
`;

export const GridWrapper = styled.div`
  display: grid;
  gap: 24px;
  justify-content: start;

  grid-template-columns: repeat(4, 324px);

  @media (max-width: ${({ theme }) => theme.breakpoints.smallWindow}) {
    grid-template-columns: repeat(auto-fill, minmax(430px, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
     grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
  }

  /* @media (max-width: 659px) {
    justify-content: center;
    grid-template-columns: 288px;
  } */
`;

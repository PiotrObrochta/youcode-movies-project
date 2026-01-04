import styled from "styled-components";

export const Wrapper = styled.main`
  max-width: 1368px;
  margin: 0 auto;
  padding: 24px 16px;
  padding-top: 64px; 

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    padding-top: 24px;
  }
`;

export const HeaderSection = styled.section`
  display: flex;
  gap: 40px;
  background-color: ${({ theme }) => theme.colors.white};
  height: 644px;
  padding: 40px;
  border-radius: 5px;
  margin-bottom: 64px;
  box-shadow: 0px 4px 12px rgba(0,0,0,0.08);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    padding: 16px;
    gap: 16px;
    flex-direction: column;
    margin-bottom: 24px; 
    height: auto;
  }
`;

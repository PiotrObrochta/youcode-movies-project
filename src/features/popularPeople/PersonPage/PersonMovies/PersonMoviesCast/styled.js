import styled from "styled-components";
import noPoster from "../../../../../assets/no-poster.svg";

export const MoviesSection = styled.section`
  width: 100%;
  margin-top: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    margin-top: 32px;
  }
`;

export const SectionTitle = styled.h1`
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 24px;

 @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 20px;
    line-height: 120%;
    margin-top: 24px; 
    margin-bottom: 16px;
  }
`;

export const PosterFallbackScope = styled.div`
  img[src*="via.placeholder.com"] {
    content: url(${noPoster});
    object-fit: contain;
  }
`;

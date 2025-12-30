import styled, { css } from "styled-components";
import noPoster from "../../../assets/no-poster.svg";

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

export const ProfileImage = styled.div`
  flex-shrink: 0;

  img {
    width: 399px;
    height: 564px;
    object-fit: cover;
    border-radius: 5px;

     @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
      width: 116px;
      height: 163px;
    }
  }
`;

export const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 8px 0;
  height: 100%;
  overflow: hidden;
`;

export const Name = styled.h1`
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 14px;
    line-height: 130%;
  }
`;

export const MetaGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const MetaRow = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    flex-wrap: wrap;
    gap: 4px 4px;
  }
`;

export const MetaLabel = styled.span`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.darkGray};

  .mobile {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 12px;
    line-height: 14px;
    font-weight: 400;

    .desktop {
      display: none;
    }

    .mobile {
      display: inline;
    }
  }
`;

export const MetaValue = styled.span`
  font-size: 18px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 12px;
    line-height: 14px;
    font-weight: 400;
  }
`;

export const Biography = styled.p`
  font-size: 20px;
  line-height: 160%;
  margin: 0;
  
    ${({ $overview }) =>
    $overview &&
    css`
      overflow: auto;
      max-height: 100%;
      padding-right: 10px;

      &::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 4px;
      }

      &::-webkit-scrollbar-track {
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 4px;
      }
    `}

   @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 14px;
    line-height: 160%;
  }


`;

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

export const DesktopHeader = styled.div`
  display: flex;
  gap: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    display: none;
  }
`;

export const MobileHeader = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;

export const TopRow = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    height: 163px;
  }
`;

export const MetaColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: auto;
    padding: 4px 0;
    gap: 16px;
  }
`;

export const PosterFallbackScope = styled.div`
  img[src*="via.placeholder.com"] {
    content: url(${noPoster});
    object-fit: contain;
  }
`;

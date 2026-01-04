import styled, { css } from "styled-components";

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
        background-color: ${({ theme }) => theme.colors.blackNav};
        border-radius: 4px;
      }

      &::-webkit-scrollbar-track {
        background-color: ${({ theme }) => theme.colors.blackNav};
        border-radius: 4px;
      }
    `}

   @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 14px;
    line-height: 160%;
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
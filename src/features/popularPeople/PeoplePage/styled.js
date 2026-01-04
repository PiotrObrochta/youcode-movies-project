import styled from "styled-components";
import { Link } from "react-router-dom";

export const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 56px 24px;
  box-sizing: border-box;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    padding: 24px 16px;
  }
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
  margin: 0 0 24px;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 18px;
    margin-bottom: 16px;
  }
`;

export const PeopleGrid = styled.div`
  display: grid;
  justify-content: center;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(208px, 1fr));

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    gap: 16px;
    grid-template-columns: repeat(auto-fit, minmax(136px, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const PersonTile = styled(Link)`
  width: 100%;
  aspect-ratio: 208 / 339;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    aspect-ratio: 136 / 245;
  }
`;

export const PhotoWrapper = styled.div`
  width: calc(100% - 32px);
  aspect-ratio: 176 / 231;
  margin-top: 16px;
  border-radius: 6px;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: calc(100% - 16px);
    aspect-ratio: 120 / 178;
    margin-top: 8px;
  }
`;

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;

  ${PersonTile}:hover & {
    transform: scale(1.06);
  }
`;

export const Name = styled.p`
  margin: 16px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    margin: 8px;
    font-size: 14px;
  }
`;

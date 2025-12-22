import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../../../assets/star.svg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const Card = styled.div`
  width: 324px;
  min-height: 650px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  padding: 16px;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallWindow}) {
    width: 100%;
    min-width: 430px;
    min-height: 201px;
    flex-direction: row;
    padding: 16px;
    gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 100%;
    min-width: 288px;
    min-height: 201px;
    flex-direction: row;
    padding: 16px;
    gap: 16px;
  }
`;

export const PosterWrapper = styled.div`
  width: 292px;
  height: 434px;
  overflow: hidden;
  border-radius: 5px;
  flex-shrink: 0;
  align-self: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallWindow}) {
    width: auto;
    height: 300px;
    align-self: flex-start;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 114px;
    height: 169px;
    align-self: flex-start;
  }
`;

export const Poster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s ease;

  ${Card}:hover & {
    transform: scale(1.06);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-top: 16px;
  justify-content: space-between;
  box-sizing: border-box;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallWindow}) {
    padding-top: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    padding-top: 0;
    justify-content: normal;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.h3`
  margin: 0;
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.black};
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 16px;
    -webkit-line-clamp: 2;
  }
`;

export const Info = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.darkGray};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 12px;
  }
`;

export const GenresWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 0;
  overflow: hidden;
`;

export const GenreTag = styled.span`
  background: ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.black};
  padding: 6px 12px;
  border-radius: 5px;
  font-weight: 400;
  font-size: 14px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    padding: 4px 6px;
    font-size: 10px;
  }
`;

export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallWindow}) {
    gap: 6px;
    margin-top: 12px;
  }
`;

export const RatingValue = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 13px;
  }
`;

export const RatingCount = styled.span`
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.darkGray};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 13px;
  }
`;

export const Star = styled(StarIcon)`
  width: 24px;
  height: 24px;
  fill: ${({ theme }) => theme.colors.yellow};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 16px;
    height: 16px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`

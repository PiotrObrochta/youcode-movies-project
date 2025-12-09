import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../../../assets/star.svg";

export const Card = styled.div`
  width: 324px;
  height: 650px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  padding: 16px;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    flex-direction: row;
    width: 288px;
    height: 201px;
    padding: 16px;
  }
`;

export const PosterWrapper = styled.div`
  width: 292px;
  height: 434px;
  overflow: hidden;
  border-radius: 5px;
  flex-shrink: 0;
  align-self: center;

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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    padding-top: 0;
    padding-left: 16px;
    justify-content: flex-start;
  }
`;

export const Title = styled.h3`
  margin: 0;
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 16px;
  }
`;

export const Info = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.darkGray};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 12px;
  }
`;

export const GenresWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 8px 0 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    gap: 4px;
    margin: 4px 0 0 0;
  }
`;

export const GenreTag = styled.span`
  background: ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.black};
  padding: 8px 16px;
  border-radius: 5px;
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 10px;
    padding: 4px 8px;
  }
`;

export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    gap: 6px;
    margin-top: 4px;
  }
`;

export const RatingValue = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 12px;
  }
`;

export const RatingCount = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.darkGray};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 12px;
  }
`;

export const Star = styled(StarIcon)`
  width: 16px;
  height: 16px;
  fill: ${({ theme }) => theme.colors.yellow};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 12px;
    height: 12px;
  }
`;

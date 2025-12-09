import styled from "styled-components";

export const Poster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 22px;
  color: ${({ theme }) => theme.colors.black};
`;

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

  &:hover ${Poster} {
    transform: scale(1.06);
  }
`;

export const PosterWrapper = styled.div`
  width: 100%;
  height: 434px;
  overflow: hidden;
  border-radius: 5px;
  align-self: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-top: 16px;
`;

export const Info = styled.p`
  margin: 0;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const GenresWrapper = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 8px;
`;

export const GenreTag = styled.span`
  background: ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.black};
  padding: 8px 16px 8px 16px;
  border-radius: 5px;
  font-size: 14px;
`;

export const RatingWrapper = styled.div`
  position: absolute;
  bottom: 16px;
  left: 16px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const RatingValue = styled.span`
  font-weight: 700;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.black};
`;

export const RatingCount = styled.span`
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.darkGray};
`;

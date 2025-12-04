import styled from "styled-components";

export const Card = styled.div`
  width: 324px;
  height: 650px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  padding: 16px;
`;

export const Poster = styled.img`
  width: 292px;
  height: 434px;
  object-fit: cover;
  border-radius: 4px;
  align-self: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-top: 16px;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 1.2rem;
`;

export const Info = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.gray};
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
  padding: 4px 12px;
  border-radius: 5px;
  font-size: 0.8rem;
`;

export const RatingWrapper = styled.div`
  position: absolute;
  bottom: 16px;
  left: 16px;
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const RatingValue = styled.span`
  font-weight: 700;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.black};
`;

export const RatingCount = styled.span`
  font-weight: 400;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.gray};
`;

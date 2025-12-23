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

export const PeopleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 208px);
  grid-auto-rows: 339px;
  gap: 24px;
  justify-content: space-between;
`;

export const PersonTile = styled.div`
  width: 208px;
  height: 339px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.24);
  }
`;

export const PhotoWrapper = styled.div`
  width: 176px;
  height: 231px;
  margin: 16px 16px 0 16px;
  border-radius: 6px;
  overflow: hidden;
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
  width: 176px;
  height: 58px;
  margin: 16px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
`;

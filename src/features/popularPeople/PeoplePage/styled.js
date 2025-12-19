import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1368px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const Title = styled.h1`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 36px;
  margin-bottom: 32px;
`;

export const PeopleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 208px);
  grid-auto-rows: 339px;
  gap: 24px;
`;

export const PersonTile = styled.div`
  width: 208px;
  height: 339px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  transition: box-shadow 0.3s ease;
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
  margin: 16px 16px 16px 16px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  text-align: center;
  color: #000;
`;

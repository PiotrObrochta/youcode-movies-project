import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1360px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 32px;
`;

export const PeopleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 208px);
  gap: 32px;
`;

export const PersonTile = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  cursor: pointer;
`;

export const Photo = styled.img`
  width: 176px;
  height: 231px;
  object-fit: cover;
  border-radius: 6px;
  margin: 0 auto;
`;

export const Name = styled.p`
  margin-top: 12px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  font-size: 22px;
  line-height: 130%;
  height: 58px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

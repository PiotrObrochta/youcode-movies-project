import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as CameraIcon } from "../../assets/icons/Video.svg";

export const Wrapper = styled.header`
  width: 100%;
  background-color: #18181b;
  padding: 16px 52px;
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    padding: 16px 16px;
    gap: 20px;
  }

   @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const CameraIconStyled = styled(CameraIcon)`
  width: 24px;
  height: 24px;
  stroke: #ffffff;
  fill: none;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: -1.5px;
  color: #ffffff;
  margin: 0;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 100px;

  @media (max-width: 1024px) {
    margin-left: 32px;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    gap: 10px;
  }
`;

export const MenuLink = styled(NavLink)`
  color: white;
  font-size: 14px;
  text-decoration: none;
  padding: 8px 24px;
  border-radius: 24px;
  border: 1px solid transparent;

  &.active {
    border-color: white;
  }

  @media (max-width: 768px) {
    padding: 6px 16px;
    font-size: 13px;
  }
`;

export const Right = styled.div`
  margin-left: auto;

  @media (max-width: 768px) {
    width: 100%;
    order: 3;
  }
`;

export const SearchInput = styled.input`
  flex-grow: 1;
  height: 100%;
  font-size: 16px;
  border: none;
  outline: none;
  background: transparent;
  font-family: "Poppins", sans-serif;
  color: #7e839a;

  &::placeholder {
    color: #7e839a;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  width: 432px;
  height: 48px;

  padding: 0 20px;

  background-color: #ffffff;
  border-radius: 33px;
  border: 1px solid #e4e6f0;

  svg {
    width: 24px;
    height: 24px;
    stroke: #7e839a;
    stroke-width: 2;
  }

  @media (max-width: 1024px) {
    width: 300px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

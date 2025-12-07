import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.header`
  width: 100%;
  background-color: #18181B;
  padding: 16px 24px;

  display: flex;
  align-items: center;
  gap: 40px;

  @media (max-width: 1024px) {
    gap: 24px;
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

  @media (max-width: 768px) {
    order: 1;
  }
`;

export const Logo = styled.div`
  font-size: 28px;
  color: white;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: white;
  margin: 0;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: 1024px) {
    gap: 16px;
  }

  @media (max-width: 768px) {
    order: 2;
  }
`;

export const MenuLink = styled(NavLink)`
  color: white;
  font-size: 14px;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 24px;

  &.active {
    border: 1px solid white;
  }
`;

export const Right = styled.div`
  margin-left: auto;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    order: 3;
  }
`;

export const SearchInput = styled.input`
  width: 300px;
  height: 40px;
  padding: 0 16px;
  border-radius: 24px;
  border: none;
  outline: none;
  font-size: 14px;

  @media (max-width: 1024px) {
    width: 240px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

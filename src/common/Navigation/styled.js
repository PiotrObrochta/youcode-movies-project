import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as CameraIcon } from "../../assets/icons/Video.svg";

export const Wrapper = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  padding: 16px 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1024px) {
    padding: 16px;
  }

   @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 16px;
  }

  @media (max-width: 480px) {
  padding: 12px;
  gap: 12px;
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
  stroke: ${({ theme }) => theme.colors.white};
  fill: none;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: -1.5px;
  color: ${({ theme }) => theme.colors.white};
  margin: 0;
  display: flex;
  align-items: center;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 20px;
  }

  @media (max-width: 480px) {
  font-size: 16px;
  line-height: 18px;
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

  @media (max-width: 480px) {
  gap: 8px;
}
`;

export const MenuLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  text-decoration: none;
  padding: 8px 24px;
  border-radius: 24px;
  border: 1px solid transparent;

  &.active {
    border-color: ${({ theme }) => theme.colors.white};
  }

  @media (max-width: 768px) {
    padding: 6px 16px;
    font-size: 13px;
  }

  @media (max-width: 480px) {
  padding: 6px 12px;
  font-size: 12px;
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
  color: ${({ theme }) => theme.colors.darkGray};

  &::placeholder {
    color: ${({ theme }) => theme.colors.darkGray};
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  width: 432px;
  height: 48px;

  padding: 0 20px;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 33px;
  border: 1px solid ${({ theme }) => theme.colors.gray};

  svg {
    width: 24px;
    height: 24px;
    stroke: ${({ theme }) => theme.colors.darkGray};
    stroke-width: 2;
  }

  @media (max-width: 1024px) {
    width: 300px;
  }

  @media (max-width: 768px) {
    width: 100%; 
  }

  @media (max-width: 480px) {
  height: 44px;
  padding: 0 16px;
}
`;

import styled from "styled-components";
import { ReactComponent as ArrowLeft } from "../../assets/icons/ArrowLeft.svg";
import { ReactComponent as ArrowRight } from "../../assets/icons/ArrowRight.svg";

export const PaginationWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin: 56px 0;
`;

export const ButtonsGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const PaginationButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  padding: 8px 16px;
  height: 36px;

  border-radius: 5px;
  border: 1px solid transparent;

  background-color: ${({ theme, variant }) =>
    variant === "primary" ? theme.colors.blueLight : theme.colors.gray};

  color: ${({ theme, variant }) =>
    variant === "primary" ? theme.colors.blue : theme.colors.darkGray};

  font-size: 14px;
  font-weight: 400;
  cursor: pointer;

  .double {
    display: none;
    gap: 4px;
    align-items: center;
  }

  @media (max-width: 480px) {
    span {
      display: none;
    }

    .single {
      display: none;
    }

    .double {
      display: flex;
    }

    padding: 8px 12px;
  }

  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
`;

export const PageInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  font-size: 16px;
  color: ${({ theme }) => theme.colors.darkGray};

  span {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const ArrowLeftIcon = styled(ArrowLeft)`
  width: 7px;
  height: 11px;
  stroke: currentColor; 
`;

export const ArrowRightIcon = styled(ArrowRight)`
  width: 7px;
  height: 11px;
  stroke: currentColor;
`;

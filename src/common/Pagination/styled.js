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

  @media (max-width: 480px) {
    gap: 12px;
    margin: 32px 0;
  }
`;

export const ButtonsGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 480px) {
    gap: 4px;
  }
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

  color: ${({ theme }) => theme.colors.black};

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
    display: ${({ doubleOnMobile }) =>
    doubleOnMobile ? "none" : "inline-flex"};
  }

  .double {
    display: ${({ doubleOnMobile }) =>
    doubleOnMobile ? "flex" : "none"};
    gap: 4px;
    align-items: center;
  }

  padding: 8px 12px;
  height: 24px;
  font-size: 10px;
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

  @media (max-width: 480px) {
    font-size: 10px;
    line-height: 24px;
    gap: 4px;

    span {
      font-weight: 600;
    }
  }
`;

export const ArrowLeftIcon = styled(ArrowLeft)`
  width: 7px;
  height: 11px;
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const ArrowRightIcon = styled(ArrowRight)`
  width: 7px;
  height: 11px;
  color: ${({ theme }) => theme.colors.blue};
`;

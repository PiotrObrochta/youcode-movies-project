import styled, { css } from "styled-components";
import { ReactComponent as StarIcon } from "../../assets/star.svg";

export const Star = styled(StarIcon)`
    width: 40px;
    height: 40px;

    ${({ $description }) => $description && css`
        width: 24px;
        height: 24px;
    `}
`
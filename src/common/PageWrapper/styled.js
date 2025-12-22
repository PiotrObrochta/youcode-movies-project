import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 1408px;
    width: 100%;
    margin: 0px auto 30px;
    padding: 0px 20px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        padding: 0px 16px;
    }
`
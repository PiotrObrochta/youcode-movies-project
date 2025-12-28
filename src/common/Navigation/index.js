import {
    Wrapper,
    HeaderContainer,
    HeaderBackground,
    LogoLink,
    Title,
    Menu,
    MenuLink,
    Right,
    SearchWrapper,
    SearchInput,
    CameraIconStyled,
} from "./styled";

import { ReactComponent as SearchIcon } from "../../assets/icons/Search.svg";

const Navigation = () => (
    <HeaderBackground>
        <HeaderContainer>
            <Wrapper>
                <LogoLink to="/movies">
                    <CameraIconStyled />
                    <Title>Movies Browser</Title>
                </LogoLink>

                <Menu>
                    <MenuLink to="/movies" >MOVIES</MenuLink>
                    <MenuLink to="/people" >PEOPLE</MenuLink>
                </Menu>

                <Right>
                    <SearchWrapper>
                        <SearchIcon />
                        <SearchInput placeholder="Search for movies..." />
                    </SearchWrapper>
                </Right>
            </Wrapper>
        </HeaderContainer>
    </HeaderBackground>
);

export default Navigation;

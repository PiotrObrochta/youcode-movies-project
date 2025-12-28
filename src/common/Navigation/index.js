import {
    Wrapper,
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
    <Wrapper>
        <LogoLink to="/movies">
            <CameraIconStyled />
            <Title>Movies Browser</Title>
        </LogoLink>

        <Menu>
            <MenuLink to="/movies" end={false}>MOVIES</MenuLink>
            <MenuLink to="/people" end={false}>PEOPLE</MenuLink>
        </Menu>

        <Right>
            <SearchWrapper>
                <SearchIcon />
                <SearchInput placeholder="Search for movies..." />
            </SearchWrapper>
        </Right>
    </Wrapper>
);

export default Navigation;

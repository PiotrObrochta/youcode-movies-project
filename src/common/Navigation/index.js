import { Wrapper, Left, Title, Menu, MenuLink, Right, SearchWrapper, SearchInput } from "./styled";
import { ReactComponent as CameraIconStyled } from "../../assets/icons/Video.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/Search.svg";

const Navigation = () => (
    <Wrapper>
        <Left>
            <CameraIconStyled />
            <Title>Movies Browser</Title>
        </Left>

        <Menu>
            <MenuLink to="/movies">MOVIES</MenuLink>
            <MenuLink to="/people">PEOPLE</MenuLink>
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

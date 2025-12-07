import { Wrapper, Left, Logo, Title, Menu, MenuLink, Right, SearchInput } from "./styled";

const Navigation = () => {
    return (
        <Wrapper>
            <Left>
                <Logo></Logo>
                <Title>Movies Browser</Title>
            </Left>

            <Menu>
                <MenuLink to="/movies">MOVIES</MenuLink>
                <MenuLink to="/people">PEOPLE</MenuLink>
            </Menu>

            <Right>
                <SearchInput placeholder="Search for movies..." />
            </Right>
        </Wrapper>
    );
};

export default Navigation;

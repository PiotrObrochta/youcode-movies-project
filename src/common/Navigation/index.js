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
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSearchResults,
  setSearchType,
  setQuery,
  clearSearch,
  selectSearchQuery,
} from "../../features/search/searchSlice";
import { useLocation } from "react-router-dom";

const Navigation = () => {
  const dispatch = useDispatch();
  const query = useSelector(selectSearchQuery);
  const location = useLocation();

  const currentSearchType = location.pathname.startsWith("/people")
    ? "people"
    : "movies";

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query) return;
    dispatch(setSearchType(currentSearchType));
    dispatch(fetchSearchResults(query));
  };

  const handleResetSearch = () => {
    dispatch(clearSearch());
    dispatch(setQuery(""));
  };

  return (
    <HeaderBackground>
      <HeaderContainer>
        <Wrapper>
          <LogoLink to="/movies" onClick={handleResetSearch}>
            <CameraIconStyled />
            <Title>Movies Browser</Title>
          </LogoLink>

          <Menu>
            <MenuLink to="/movies" onClick={handleResetSearch}>
              MOVIES
            </MenuLink>
            <MenuLink to="/people" onClick={handleResetSearch}>
              PEOPLE
            </MenuLink>
          </Menu>
          <Right>
            <SearchWrapper>
              <SearchIcon />
              <form onSubmit={handleSearch}>
                <SearchInput
                  placeholder={
                    currentSearchType === "people"
                      ? "Search for people..."
                      : "Search for movies..."
                  }
                  value={query}
                  onChange={(e) => dispatch(setQuery(e.target.value))}
                />
              </form>
            </SearchWrapper>
          </Right>
        </Wrapper>
      </HeaderContainer>
    </HeaderBackground>
  );
};

export default Navigation;

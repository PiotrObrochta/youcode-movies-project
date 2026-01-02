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
  setInputValue,
  setSearchType,
  submitSearch,
  clearSearch,
  selectInputValue,
} from "../../features/search/searchSlice";
import { useLocation, useHistory } from "react-router-dom";

const Navigation = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector(selectInputValue);
  const location = useLocation();
  const history = useHistory();

  const currentSearchType = location.pathname.startsWith("/people")
    ? "people"
    : "movies";

  const handleSearch = (e) => {
    e.preventDefault();
    if (!inputValue) return;

    dispatch(setSearchType(currentSearchType));
    dispatch(submitSearch());
    history.push(currentSearchType === "people" ? "/people" : "/movies");
  };

  const handleResetSearch = () => {
    dispatch(clearSearch());
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
                  value={inputValue}
                  onChange={(e) => dispatch(setInputValue(e.target.value))}
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

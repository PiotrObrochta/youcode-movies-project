import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

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
import {
  setQuery,
  submitSearch,
  clearSearch,
  selectSearchQuery,
} from "../search/searchSlice";

const Navigation = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const query = useSelector(selectSearchQuery);

  const debounceRef = useRef(null);

  const isPeopleContext = location.pathname.startsWith("/people");
  const listPath = isPeopleContext ? "/people" : "/movies";

  const reset = () => {
    dispatch(clearSearch());
  };

  const executeSearch = () => {
    if (query.length < 3) return;

    const searchUrl = `${listPath}?search=${encodeURIComponent(query)}`;

    history.replace(searchUrl);

    dispatch(submitSearch());
  };

  const onChange = (e) => {
    const value = e.target.value;
    dispatch(setQuery(value));

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    if (!value) return;

    debounceRef.current = setTimeout(executeSearch, 800);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
      executeSearch();
    }
  };

  return (
    <HeaderBackground>
      <HeaderContainer>
        <Wrapper>
          <LogoLink to="/movies" onClick={reset}>
            <CameraIconStyled />
            <Title>Movies Browser</Title>
          </LogoLink>

          <Menu>
            <MenuLink to="/movies" onClick={reset}>
              MOVIES
            </MenuLink>
            <MenuLink to="/people" onClick={reset}>
              PEOPLE
            </MenuLink>
          </Menu>

          <Right>
            <SearchWrapper>
              <SearchIcon />
              <SearchInput
                value={query}
                onChange={onChange}
                onKeyDown={onKeyDown}
                placeholder={
                  isPeopleContext
                    ? "Search for people..."
                    : "Search for movies..."
                }
              />
            </SearchWrapper>
          </Right>
        </Wrapper>
      </HeaderContainer>
    </HeaderBackground>
  );
};

export default Navigation;

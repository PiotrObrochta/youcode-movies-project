import { useRef, useEffect } from "react";
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

const MIN_LENGTH = 3;
const DEBOUNCE_TIME = 800;

const Navigation = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const query = useSelector(selectSearchQuery);

  const debounceRef = useRef(null);
  const lastValueRef = useRef(query);
  const didInitRef = useRef(false);

  const isPeopleContext = location.pathname.startsWith("/people");
  const listPath = isPeopleContext ? "/people" : "/movies";

  useEffect(() => {
    if (didInitRef.current) return;
    didInitRef.current = true;

    const params = new URLSearchParams(location.search);
    const hasSearch = params.has("search");

    if (!location.pathname || (location.pathname === "/" && !hasSearch)) {
      history.replace("/movies");
    }
  }, [history, location.pathname, location.search]);

  const executeSearch = (value) => {
    if (value.length < MIN_LENGTH) return;

    history.push({
      pathname: listPath,
      search: `?search=${encodeURIComponent(value)}&page=1`,
    });

    dispatch(submitSearch());
  };

  const onChange = (e) => {
    const value = e.target.value;
    const prevValue = lastValueRef.current;

    dispatch(setQuery(value));
    lastValueRef.current = value;

    if (debounceRef.current) clearTimeout(debounceRef.current);

    if (value.length < prevValue.length) return;

    if (value.length < MIN_LENGTH) return;

    debounceRef.current = setTimeout(() => {
      executeSearch(value);
    }, DEBOUNCE_TIME);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      if (debounceRef.current) clearTimeout(debounceRef.current);

      if (query.length >= MIN_LENGTH) {
        executeSearch(query);
      }
    }
  };

  const reset = () => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    dispatch(clearSearch());
    history.push(listPath);
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

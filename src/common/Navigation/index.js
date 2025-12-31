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
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  setQuery,
  setSearchType,
  fetchSearchResults,
} from "../../features/search/searchSlice";
import { useState } from "react";

const Navigation = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [value, setValue] = useState("");

  const isPeople = location.pathname.startsWith("/people");

  const handleSubmit = (e) => {
    if (e.key !== "Enter") return;

    dispatch(setQuery(value));
    dispatch(setSearchType(isPeople ? "people" : "movies"));
    dispatch(fetchSearchResults());

    setValue("");
  };

  return (
    <HeaderBackground>
      <HeaderContainer>
        <Wrapper>
          <LogoLink to="/movies">
            <CameraIconStyled />
            <Title>Movies Browser</Title>
          </LogoLink>

          <Menu>
            <MenuLink to="/movies">MOVIES</MenuLink>
            <MenuLink to="/people">PEOPLE</MenuLink>
          </Menu>

          <Right>
            <SearchWrapper>
              <SearchIcon />
              <SearchInput
                placeholder={
                  isPeople ? "Search for people..." : "Search for movies..."
                }
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleSubmit}
              />
            </SearchWrapper>
          </Right>
        </Wrapper>
      </HeaderContainer>
    </HeaderBackground>
  );
};

export default Navigation;

import { ListWrapper } from "./styled"; // <── IMPORT styled.js

export const Wrapper = ({ children }) => {

  return (
    <ListWrapper>
      {children}
    </ListWrapper>
  );
};

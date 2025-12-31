import { Container, Header, NoResultsImage } from "./styled";

const NoResultsView = ({ query }) => {
  return (
    <Container>
      <Header>Sorry, there are no results for "{query}"</Header>
      <NoResultsImage />
    </Container>
  );
};

export default NoResultsView;

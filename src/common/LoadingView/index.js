import { Container, Header, Spinner } from "./styled";

const LoadingView = ({ header, query }) => (
  <Container>
    <Header>{query ? `Search results for "${query}"` : header}</Header>
    <Spinner />
  </Container>
);

export default LoadingView;

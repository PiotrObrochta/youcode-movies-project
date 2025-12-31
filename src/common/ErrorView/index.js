import { Container, DangerIcon, Header, HomepageButton, Info } from "./styled";
import { useHistory } from "react-router-dom";

const ErrorView = () => {
  const history = useHistory();

  return (
    <Container>
      <DangerIcon />
      <Header>Ooops! Something went wrong...</Header>
      <Info>
        Please check your network connection
        <br />
        and try again
      </Info>
      <HomepageButton onClick={() => history.push("/movies")}>
        Back to home page
      </HomepageButton>
    </Container>
  );
};

export default ErrorView;

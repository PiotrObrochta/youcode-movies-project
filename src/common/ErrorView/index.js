import { Container, DangerIcon, Header, HomepageButton, Info } from "./styled";

const ErrorView = () => {

    return (
        <Container>
            <DangerIcon></DangerIcon>
            <Header>Ooops! Something went wrong...</Header>
            <Info>Please check your network connection<br/>and try again</Info>
            <HomepageButton>Back to home page</HomepageButton>
        </Container>
    )
};

export default ErrorView;
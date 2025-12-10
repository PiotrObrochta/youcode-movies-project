import { Container, Header, Spinner } from "./styled";

const LoadingView = ({header}) => (
    <Container>
        <Header>{header}</Header>
        <Spinner></Spinner>
    </Container>
);

export default LoadingView;
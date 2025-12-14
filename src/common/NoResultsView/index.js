import { Container, Header, NoResultsImage } from "./styled";


const NoResultsView = () => {
    return (
        <Container>
            <Header>Sorry, there are no results for "Muan"</Header>
            <NoResultsImage></NoResultsImage>
        </Container>
    );
};

export default NoResultsView;
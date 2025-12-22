import PersonTile from "./PersonTile";
import { Header, TilesWrapper, Wrapper } from "./styled"

const PeopleList = ({ people, header }) => {

    return (
        <Wrapper>
            <Header>{header}</Header>
            <TilesWrapper>
                {people.map(person => <PersonTile key={person.id} person={person}></PersonTile>)}
            </TilesWrapper>
        </Wrapper>
    );
};


export default PeopleList;
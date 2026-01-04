import PersonTile from "./PersonTile";
import { Header, TilesWrapper, Wrapper } from "./styled"

const PeopleList = ({ people, header, idPrefix }) => {

    return (
        <Wrapper>
            <Header>{header}</Header>
            <TilesWrapper>
                {people.map((person, index) => <PersonTile key={`${idPrefix}-${person.id}-${index}`} person={person}></PersonTile>)}
            </TilesWrapper>
        </Wrapper>
    );
};


export default PeopleList;
import { Profile, ProfileWrapper, StyledLink, Text, Wrapper } from "./styled";
import profilePlaceholder from "../../../../../assets/no-profile.svg";

const PersonTile = ({ person }) => {
    const profilePath = `https://image.tmdb.org/t/p/w185/${person.profile_path}`;

    return (
        <StyledLink to={`/people/${person.id}`}>
            <Wrapper>
                <ProfileWrapper>
                    <Profile src={profilePath} alt="profile" onError={(event) => { event.currentTarget.src = profilePlaceholder }}></Profile>
                </ProfileWrapper>
                <Text>{person.name}</Text>
                <Text $role>{person.character || person.job}</Text>
            </Wrapper>
        </StyledLink>
    )
}

export default PersonTile;
import {
    DesktopHeader,
    MobileHeader,
    TopRow,
    ProfileImage,
    ProfileDetails,
    Name,
    MetaGroup,
    MetaRow,
    MetaLabel,
    MetaValue,
    MetaColumn,
    Biography,
} from "./styled";

const PersonHeader = ({ person }) => {
    return (
        <>
            <DesktopHeader>
                <ProfileImage>
                    <img
                        src={`https://image.tmdb.org/t/p/w300${person.profile_path}`}
                        alt={person.name}
                    />
                </ProfileImage>

                <ProfileDetails>
                    <Name>{person.name}</Name>

                    <MetaGroup>
                        <MetaRow>
                            <MetaLabel>Date of birth:</MetaLabel>
                            <MetaValue>{person.birthday || "—"}</MetaValue>
                        </MetaRow>
                        <MetaRow>
                            <MetaLabel>Place of birth:</MetaLabel>
                            <MetaValue>{person.place_of_birth || "—"}</MetaValue>
                        </MetaRow>
                    </MetaGroup>

                    <Biography $overview>{person.biography || "No biography available."}</Biography>
                </ProfileDetails>
            </DesktopHeader>

            <MobileHeader>
                <TopRow>
                    <ProfileImage>
                        <img
                            src={`https://image.tmdb.org/t/p/w300${person.profile_path}`}
                            alt={person.name}
                        />
                    </ProfileImage>

                    <MetaColumn>
                        <Name>{person.name}</Name>

                        <MetaGroup>
                            <MetaRow>
                                <MetaLabel>Birth:</MetaLabel>
                                <MetaValue>{person.birthday || "—"}</MetaValue>
                            </MetaRow>
                            <MetaRow>
                                <MetaLabel>Place of birth:</MetaLabel>
                                <MetaValue>{person.place_of_birth || "—"}</MetaValue>
                            </MetaRow>
                        </MetaGroup>
                    </MetaColumn>
                </TopRow>

                <Biography>{person.biography || "No biography available."}</Biography>
            </MobileHeader>
        </>
    );
};

export default PersonHeader;
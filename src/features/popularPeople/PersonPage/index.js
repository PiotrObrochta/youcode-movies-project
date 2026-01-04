import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPersonDetails, getPersonMovieCredits } from "../../tmdbApi";
import { MovieCard } from "../../../common/MovieCard";
import { GridWrapper } from "../../movies/moviesPage/styled";
import {
    Wrapper,
    HeaderSection,
    ProfileImage,
    ProfileDetails,
    MoviesSection,
    SectionTitle,
    Name,
    MetaGroup,
    MetaRow,
    MetaLabel,
    MetaValue,
    Biography,
    DesktopHeader,
    MobileHeader,
    TopRow,
    MetaColumn,
} from "./styled";
import { PosterFallbackScope } from "./styled";
import noProfile from "../../../assets/no-profile.svg";

const formatDate = (date) => {
    if (!date) return "—";
    return new Date(date).toLocaleDateString("pl-PL");
};

const PersonPage = () => {
    const { personId } = useParams();

    const [person, setPerson] = useState(null);
    const [cast, setCast] = useState([]);
    const [crew, setCrew] = useState([]);

    useEffect(() => {
        const fetchPerson = async () => {
            try {
                const personData = await getPersonDetails(personId);
                const credits = await getPersonMovieCredits(personId);

                setPerson(personData);
                setCast(credits.cast || []);
                setCrew(credits.crew || []);
            } catch (error) {
                console.error(error);
            }
        };

        fetchPerson();
    }, [personId]);

    if (!person) return null;

    return (
        <Wrapper>
            <HeaderSection>
                <DesktopHeader>
                    <ProfileImage>
                        <img
                            src={
                                person.profile_path
                                    ? `https://image.tmdb.org/t/p/w300${person.profile_path}`
                                    : noProfile
                            }
                            alt={person.name}
                        />
                    </ProfileImage>

                    <ProfileDetails>
                        <Name>{person.name}</Name>

                        <MetaGroup>
                            <MetaRow>
                                <MetaLabel>Date of birth:</MetaLabel>
                                <MetaValue>{formatDate(person.birthday)}</MetaValue>
                            </MetaRow>
                            <MetaRow>
                                <MetaLabel>Place of birth:</MetaLabel>
                                <MetaValue>{person.place_of_birth || "—"}</MetaValue>
                            </MetaRow>
                        </MetaGroup>

                        <Biography $overview>
                            {person.biography || "No biography available."}
                        </Biography>
                    </ProfileDetails>
                </DesktopHeader>

                <MobileHeader>
                    <TopRow>
                        <ProfileImage>
                            <img
                                src={
                                    person.profile_path
                                        ? `https://image.tmdb.org/t/p/w300${person.profile_path}`
                                        : noProfile
                                }
                                alt={person.name}
                            />
                        </ProfileImage>

                        <MetaColumn>
                            <Name>{person.name}</Name>

                            <MetaGroup>
                                <MetaRow>
                                    <MetaLabel>Birth:</MetaLabel>
                                    <MetaValue>{formatDate(person.birthday)}</MetaValue>
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
            </HeaderSection>

            <MoviesSection>
                <SectionTitle>Movies – cast ({cast.length})</SectionTitle>
                    <GridWrapper>
                        {cast.map((movie, index) => (
                            <MovieCard
                                key={`person-cast-${movie.credit_id}-${index}`}
                                movie={movie}
                                mode="cast"
                            />
                        ))}
                    </GridWrapper>
            </MoviesSection>

            <MoviesSection>
                <SectionTitle>Movies – crew ({crew.length})</SectionTitle>
                    <GridWrapper>
                        {crew.map((movie, index) => (
                            <MovieCard
                                key={`person-crew-${movie.credit_id}-${index}`}
                                movie={movie}
                                mode="crew"
                            />
                        ))}
                    </GridWrapper>
            </MoviesSection>
        </Wrapper>
    );
};

export default PersonPage;
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
                            src={`https://image.tmdb.org/t/p/w300${person.profile_path}`}
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
                                src={`https://image.tmdb.org/t/p/w300${person.profile_path}`}
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
                <PosterFallbackScope>
                    <GridWrapper>
                        {cast.map((movie) => (
                            <MovieCard
                                key={movie.credit_id}
                                movie={movie}
                                mode="cast"
                            />
                        ))}
                    </GridWrapper>
                </PosterFallbackScope>
            </MoviesSection>

            <MoviesSection>
                <SectionTitle>Movies – crew ({crew.length})</SectionTitle>
                <PosterFallbackScope>
                    <GridWrapper>
                        {crew.map((movie) => (
                            <MovieCard
                                key={movie.credit_id}
                                movie={movie}
                                mode="crew"
                            />
                        ))}
                    </GridWrapper>
                </PosterFallbackScope>
            </MoviesSection>
        </Wrapper>
    );
};

export default PersonPage;
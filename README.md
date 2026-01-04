# 🎬 Movies Browser

Movies Browser is a fully responsive web application that allows users to browse, search and explore movies and people from the film industry using real data provided by The Movie Database (TMDB) API.

The application enables comfortable navigation through movies, detailed movie pages with full cast & crew, as well as popular people and their filmography.

## 🔗 Demo

[Movies Browser Demo](https://PiotrObrochta.github.io/youcode-movies-project)

## 🔍 Movies & People browsing

- Browse popular movies
- Browse popular people
- Search for:
    - movies
    - people
- Dedicated pages for:
    - movie details
    - person details

## 🎥 Movie details

Each movie page contains:

- full movie information
- release year
- production countries
- genres
- rating & number of votes
- overview/description
- Cast and Crew lists

## 👤 People details

Each person page shows:

- profile photo
- biography
- place and date of birth
- Cast and Crew lists
- clickable movie tiles leading back to movie pages

## 📄 Pagination

Both movies and people lists use pagination with: First, Previous, Next, Last.

Pagination is limited to 500 pages – this is a technical constraint of the TMDB API, which does not provide results beyond that range.
This prevents unnecessary API calls and guarantees fast and stable performance.

On small screens pagination automatically switches to icon-only SVG buttons for better usability and clean mobile layout.

## 🎨 Consistent theme & UI

- Unified design system based on a global theme
- Centralized colors, typography and spacing
- Smooth, consistent UI across all pages
- Styled with styled-components

## 🛠 UI states

Application contains full UX flow handling:

- loading views
- empty results view
- error views

## 🧑‍🤝‍🧑 Team

- Kamila — frontend developer
- Piotr — frontend developer
- Paweł — frontend developer

## 🧠 Tech stack

- React
- React Router
- Redux Toolkit
- Redux-Saga
- Styled-Components (ThemeProvider)
- TMDB API

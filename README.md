# Movie Search Application

A React TypeScript application for searching and exploring movies using The Movie Database (TMDb) API.

## Project Structure

```
src/
├── components/
│   ├── common/        # Shared components
│   │   ├── Alert.tsx
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── Movie/         # Movie-specific components
│       ├── MovieCard.tsx
│       ├── MovieGrid.tsx
│       ├── MovieDetails.tsx
│       └── MovieSearch.tsx
├── hooks/             # Custom React hooks
│   └── useMovies.ts
├── services/          # API and service layer
│   └── movieService/
│       ├── api.ts
│       └── config.ts
├── types/            # TypeScript types
│   └── movie.ts
└── utils/            # Utility functions
    └── apiUtils.ts
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd movie-search-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with your TMDb API key:
   ```
   TMDB_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Features (MVP)

- View popular movies
- Search movies by title
- View movie details
- Responsive grid layout
- Error handling
- Loading states

## Technical Stack

- React 19
- TypeScript
- TailwindCSS
- React Router 6
- Formik + Yup
- Webpack

## Development Notes

1. Components are structured to be reusable and maintainable
2. API services are separated from UI components
3. Error handling is centralized
4. Types are defined for all major data structures
5. UI follows consistent styling patterns

## Future Enhancements

- Movie trailers
- User reviews
- Similar movies recommendations
- Advanced filtering
- Sorting options
- Favorites list
- Movie ratings

## Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## License

MIT License

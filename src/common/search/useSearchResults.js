export const useSearchResults = ({
  searchResults = [],
  page,
  pageSize,
  searchFromUrl,
}) => {
  const isSearchActive = Boolean(searchFromUrl);

  const totalPages = Math.ceil(searchResults.length / pageSize);

  const pagedResults = searchResults.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  return {
    isSearchActive,
    pagedResults,
    totalPages,
  };
};

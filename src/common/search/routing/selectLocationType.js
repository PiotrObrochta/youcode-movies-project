import { createSelector } from "@reduxjs/toolkit";

export const selectLocationType = createSelector(
  (_, location) => location.pathname,
  (path) => (path.startsWith("/people") ? "people" : "movies")
);

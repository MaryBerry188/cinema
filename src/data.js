export const MAX_DESCRIPTION_LENGTH = 140;

export const ModelMethod = {
  UPDATE_FILM: `updateFilm`,
  UPDATE_FILM_WITH_RERENDER: `updateFilmWithRerender`,
  UPDATE_FILTER: `updateFilter`,
  ADD_COMMENT: `addComment`,
  DELETE_COMMENT: `deleteComment`,
  SET_FILMS: `setFilms`,
  UPDATE_USER_RATING: `updateRating`
};

export const UserRating = {
  NOVICE: `novice`,
  FAN: `fan`,
  MOVIE_BUFF: `movie buff`
};

export const SiteState = {
  TO_MOVIES: `TO_MOVIES`,
  TO_STATS: `TO_STATS`
};

export const StatsPeriod = {
  ALL: `all-time`,
  TODAY: `day`,
  WEEK: `week`,
  MONTH: `month`,
  YEAR: `year`
};

export const EMOTIONS = [
  `smile`,
  `sleeping`,
  `puke`,
  `angry`
];

export const SortType = {
  DEFAULT: `default`,
  DATE: `date`,
  RATING: `rating`,
  COMMENTS: `comments`
};

export const Category = {
  All: `all`,
  WATCHLIST: `watchlist`,
  HISTORY: `history`,
  FAVOURITES: `favourites`
};

export const FilmCardContainer = {
  RATED: `rated`,
  COMMENTED: `commented`
};

export const RenderPosition = {
  BEFOREEND: `beforeend`,
  AFTERBEGIN: `afterbegin`
};

export const UserAction = {
  DELETE_COMMENT: `DELETE_COMMENT`,
  ADD_COMMENT: `ADD_COMMENT`,
  UPDATE_FILM_CATEGORY: `UPDATE_FILM_CATEGORY`,
  REPLACE_FILM: `REPLACE_FILM`,
  UPDATE_FILM_CATEGORY_WITH_RERENDER: `UPDATE_FILM_CATEGORY_WITH_RERENDER`,
  UPDATE_FILTER: `UPDATE_FILTER`
};

export const UpdateType = {
  PATCH: `PATCH`,
  MINOR: `MINOR`,
  MAJOR: `MAJOR`
};

export const KeyboardKeyCodes = {
  ENTER_CODE: `Enter`,
  ESCAPE_CODE: `Escape`
};

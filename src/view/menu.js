import {Category} from '../data';
import Abstract from './abstract';

const createMenuTemplate = (films, currentSort) => {
  const stats = films.reduce((accumulator, current) => {
    return {
      inWatchlist: accumulator.inWatchlist + current.isInWatchlist,
      inHistory: accumulator.inHistory + current.isInHistory,
      favourites: accumulator.favourites + current.isFavourite,
    };
  }, {
    inWatchlist: 0,
    inHistory: 0,
    favourites: 0
  });

  const getActive = (elementFilterType) => {
    return (elementFilterType === currentSort) ? ` main-navigation__item--active` : ``;
  };

  return `<nav class="main-navigation">
  <div class="main-navigation__items">
    <a href="#all" class="main-navigation__item${getActive(Category.All)}" data-filter-type="${Category.All}">All movies</a>
    <a href="#watchlist" class="main-navigation__item${getActive(Category.WATCHLIST)}" data-filter-type="${Category.WATCHLIST}">Watchlist <span class="main-navigation__item-count">${stats.inWatchlist}</span></a>
    <a href="#history" class="main-navigation__item${getActive(Category.HISTORY)}" data-filter-type="${Category.HISTORY}">History <span class="main-navigation__item-count">${stats.inHistory}</span></a>
    <a href="#favorites" class="main-navigation__item${getActive(Category.FAVOURITES)}" data-filter-type="${Category.FAVOURITES}">Favorites <span class="main-navigation__item-count">${stats.favourites}</span></a>
  </div>
  <a href="#stats" class="main-navigation__additional">Stats</a>
</nav>`;
};

export default class MenuTemplate extends Abstract {
  constructor(films, currentFilter) {
    super();
    this._films = films;
    this._currentFilter = currentFilter;

    this._onFilterChange = this._onFilterChange.bind(this);
    this.__onStatsButtonClick = this.__onStatsButtonClick.bind(this);
  }

  getTemplate() {
    return createMenuTemplate(this._films, this._currentFilter);
  }

  _onFilterChange(evt) {
    if (evt.target.tagName !== `A`) {
      return;
    }
    evt.preventDefault();
    this._callback.filterTypeChange(evt.target.dataset.filterType);
  }

  __onStatsButtonClick(evt) {
    evt.preventDefault();
    this._callback.siteStateChange(evt);
  }

  setFilterChangeHandler(cb) {
    this._callback.filterTypeChange = cb;
    this.getElement().querySelector(`.main-navigation__items`).addEventListener(`click`, this._onFilterChange);
  }

  setStatsButtonClickHandler(cb) {
    this._callback.siteStateChange = cb;
    this.getElement().querySelector(`.main-navigation__additional`).addEventListener(`click`, this.__onStatsButtonClick);
  }
}

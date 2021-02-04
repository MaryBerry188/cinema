import Abstract from './abstract';
import {SortType} from "../data.js";

const createSortTemplate = (sortType) => {
  const getActive = (elementSortType) => {
    return (elementSortType === sortType) ? ` sort__button--active` : ``;
  };
  return `<ul class="sort">
  <li><a href="#" class="sort__button${getActive(SortType.DEFAULT)}" data-sort-type="${SortType.DEFAULT}">Sort by default</a></li>
  <li><a href="#" class="sort__button${getActive(SortType.DATE)}" data-sort-type="${SortType.DATE}">Sort by date</a></li>
  <li><a href="#" class="sort__button${getActive(SortType.RATING)}" data-sort-type="${SortType.RATING}">Sort by rating</a></li>
</ul>`;
};

export default class SortTemplate extends Abstract {
  constructor(sortType) {
    super();
    this.sortType = sortType;
    this._onSortTypeChange = this._onSortTypeChange.bind(this);
  }
  getTemplate() {
    return createSortTemplate(this.sortType);
  }

  _onSortTypeChange(evt) {
    if (evt.target.tagName !== `A`) {
      return;
    }

    evt.preventDefault();
    this._callback.sortTypeChange(evt.target.dataset.sortType);
  }

  setSortTypeChangeHandler(cb) {
    this._callback.sortTypeChange = cb;
    this.getElement().addEventListener(`click`, this._onSortTypeChange);
  }
}

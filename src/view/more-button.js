import Abstract from './abstract';

const createMoreButtonTemplate = () => {
  return `<button class="films-list__show-more">Show more</button>`;
};

export default class MoreButtonTemplate extends Abstract {
  constructor() {
    super();

    this._onShowMoreButtonClick = this._onShowMoreButtonClick.bind(this);
  }
  getTemplate() {
    return createMoreButtonTemplate();
  }

  _onShowMoreButtonClick(evt) {
    evt.preventDefault();
    this._callback.click(evt);
  }

  setClickHandler(cb) {
    this._callback.click = cb;
    this.getElement().addEventListener(`click`, this._onShowMoreButtonClick);
  }
}

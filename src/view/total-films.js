import Abstract from './abstract';

const createTotalFilmsTemplate = (filmsNumber) => {
  return `<p>${filmsNumber} movies inside</p>`;
};

export default class TotalFilmsTemplate extends Abstract {
  constructor(filmsNumber) {
    super();
    this._filmsNumber = filmsNumber;
  }

  getTemplate() {
    return createTotalFilmsTemplate(this._filmsNumber);
  }
}

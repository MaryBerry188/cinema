import Abstract from './abstract';

const createNoFilmsTemplate = () => {
  return `<section class="films">
            <section class="films-list">
              <h2 class="films-list__title">There are no movies in our database</h2>
            </section>
          </section>`;
};

export default class NoFilmsTemplate extends Abstract {
  getTemplate() {
    return createNoFilmsTemplate();
  }
}

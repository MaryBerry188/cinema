import Abstract from './abstract';

const createUserTemplate = (userRating) => {

  return `<section class="header__profile profile">
  ${userRating ? `<p class="profile__rating">${userRating}</p>` : ``}
  <img class="profile__avatar" src="./images/bitmap@2x.png" alt="Avatar" width="35" height="35">
</section>`;
};

export default class UserTemplate extends Abstract {
  constructor(userRating) {
    super();
    this._userRating = userRating;
  }

  getTemplate() {
    return createUserTemplate(this._userRating);
  }
}

import {remove, render, renderToast} from './utils';
import StatsTemplate from './view/stats';
import {SiteState} from './data';
import UserPresenter from './presenter/user-presenter';
import BoardPresenter from './presenter/board-presenter';
import MenuPresenter from './presenter/menu-presenter';
import MovieListPresenter from './presenter/movie-list-presenter';
import FilmModel from './model/film-model';
import FilterModel from './model/filter-model';
import CommentsModel from './model/comments-model';
import Api from './api/api';
import Provider from './api/provider';
import Store from './api/store';
import UserModel from './model/user-model';


const STORE_NAME = `cinemaddict-localstorage-v13`;

const AUTHORIZATION = `Basic serttewt34tdfwrt`;

const END_POINT = `https://13.ecmascript.pages.academy/cinemaddict/`;

let stats;

const changeSiteState = (action) => {
  switch (action) {
    case SiteState.TO_MOVIES:
      catalogPresenter.init();
      remove(stats);
      break;
    case SiteState.TO_STATS:
      catalogPresenter.destroy();
      stats = new StatsTemplate(filmsModel.getFilms(), userModel.getRating());
      render(siteMain, stats);
      break;
  }
};


const baseApi = new Api(END_POINT, AUTHORIZATION);
const store = new Store(STORE_NAME, window.localStorage);
const api = new Provider(baseApi, store);

const filmsModel = new FilmModel(api);
const filterModel = new FilterModel();
const commentsModel = new CommentsModel(api);
const userModel = new UserModel(filmsModel);
const siteMain = document.querySelector(`.main`);
const header = document.querySelector(`.header`);
const siteFooter = document.querySelector(`.footer`);
const footerStats = siteFooter.querySelector(`.footer__statistics`);


const userPresenter = new UserPresenter(userModel);
userPresenter.init(header);

const filtersPresenter = new MenuPresenter(filmsModel, filterModel, changeSiteState);
filtersPresenter.init(siteMain);

const catalogPresenter = new BoardPresenter(filmsModel, filterModel, commentsModel);
catalogPresenter.init(siteMain);

const filmsCounterPresenter = new MovieListPresenter(filmsModel);
filmsCounterPresenter.init(footerStats);


api.getFilms()
.then((films) => {
  filmsModel.setFilms(films);
})
.catch(() => {
  filmsModel.setFilms([]);
});

window.addEventListener(`load`, () => {
  navigator.serviceWorker.register(`./sw.js`);
});

window.addEventListener(`online`, () => {
  document.title = document.title.replace(` [offline]`, ``);
  api.sync();
});

window.addEventListener(`offline`, () => {
  document.title += ` [offline]`;
  renderToast(`Lost connection`);
});

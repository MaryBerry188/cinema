import Abstract from './view/abstract';
import {Category, RenderPosition} from './data';

const SHOW_TIME = 4000;
const minuteInHour = 60;

export const renderToast = (message) => {
  const toast = document.createElement(`div`);
  toast.textContent = message;
  toast.classList.add(`toast`);

  document.body.append(toast);

  setTimeout(() => {
    toast.remove();
  }, SHOW_TIME);
};

export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstChild;
};

export const render = (container, element, place = RenderPosition.BEFOREEND) => {
  if (container instanceof Abstract) {
    container = container.getElement();
  }
  if (element instanceof Abstract) {
    element = element.getElement();
  }
  switch (place) {
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
  }
};

export const replace = (newElement, oldElement) => {
  if (newElement instanceof Abstract) {
    newElement = newElement.getElement();
  }
  if (oldElement instanceof Abstract) {
    oldElement = oldElement.getElement();
  }

  const parentElement = oldElement.parentElement;

  if (parentElement === null || newElement === null || oldElement === null) {
    throw new Error(`One of elements doesn't exist in case of replacement`);
  }

  parentElement.replaceChild(newElement, oldElement);
};

export const remove = (element) => {
  if (element === null) {
    return;
  }

  if (!(element instanceof Abstract)) {
    throw new Error(`Can remove view components only`);
  }
  element.getElement().remove();
  element.removeElement();
};

export const isKeyPress = (evt, cb, keyName) => {
  if (evt.key === keyName) {
    cb();
  }
};

export const filter = {
  [Category.All]: (films) => films,
  [Category.WATCHLIST]: (films) => films.filter((film) => (film.isInWatchlist)),
  [Category.HISTORY]: (films) => films.filter((film) => (film.isInHistory)),
  [Category.FAVOURITES]: (films) => films.filter((film) => (film.isFavourite))
};

export const getDuration = (duration) => {
  const hours = duration / minuteInHour;
  const minutes = duration % minuteInHour;
  return (hours < 1) ? `${minutes}m` : `${Math.floor(hours)}h ${minutes}m`;
};

export const isOnline = () => {
  return window.navigator.onLine;
};

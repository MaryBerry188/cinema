import Observer from './observer-model';
import {Category, ModelMethod} from "../data";

export default class FilterModel extends Observer {
  constructor() {
    super();
    this._filter = Category.All;
    this._observers = {
      updateFilter: []
    };
  }

  getFilter() {
    return this._filter;
  }

  updateFilter(filterType) {
    this._filter = filterType;

    this.notify(ModelMethod.UPDATE_FILTER, this._filter);
  }
}

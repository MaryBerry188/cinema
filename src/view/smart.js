import Abstract from './abstract';

export default class Smart extends Abstract {
  constructor() {
    super();
  }
  updateElement() {
    const prevElement = this.getElement();
    const parent = prevElement.parentElement;
    this.removeElement();
    const newElement = this.getElement();
    parent.replaceChild(newElement, prevElement);
    this._restoreHandlers();
  }

  _restoreHandlers() {
    throw new Error(`Can't run abstract method: _restoreHandlers`);
  }

  updateData(updatedData, isWithoutReloading) {
    this._data = Object.assign({}, this._data, updatedData);
    if (isWithoutReloading) {
      return;
    }
    this.updateElement();
  }
}

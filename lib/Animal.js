import Eukaryota from './Eukaryota';

export default class Animal extends Eukaryota {
  constructor (name, symmetry) {
    super(name, false, false, true, true);
    this._symmetry = symmetry;

  }
    get symmetry () {
      return this._symmetry;
    }

    set symmetry (symmetry) {
      this._symmetry = symmetry;
    }
}
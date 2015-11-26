import Eukaryota from './Eukaryota';

export default class Plant extends Eukaryota {
  constructor (name, uniCellular, asexual, mobile, heterotroph) {
    super(name, false, true, false, false);
  }
}
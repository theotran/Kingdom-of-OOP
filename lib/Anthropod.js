import Bilateral from './Bilateral';

export default class Anthropod extends Bilateral {
  constructor (name) {
    super(name, 'exoskeleton');
    this._body = 'exoskeleton';
  }
 
}
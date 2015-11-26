import Bilateral from './Bilateral';

export default class Vertebrate extends Bilateral {
  constructor (name) {
    super(name, 'vertebral-column');
    this._body = 'vertebral-column';
  }
 
}
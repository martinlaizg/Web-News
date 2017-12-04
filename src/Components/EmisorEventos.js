import EventEmitter from 'wolfy87-eventemitter'

class EmisorEventos {
  constructor(){
    this.eventEmitter = new EventEmitter()
  }
}
export default new EmisorEventos
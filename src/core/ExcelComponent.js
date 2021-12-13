import {DomListener} from '@core/DomListener';

export class ExcelComponent extends DomListener {
  constructor($root, options= {}) {
    super($root, options.listeners);
    this.name = options.name || '';
    this.emitter = options.emitter;
    this.prepare();
  }

  // setting the component to init()
  prepare() {}

  // returns a component pattern
  toHTML() {
    return '';
  }

  // Component initialization
  // Add DOM listeners
  init() {
    this.initDOMListeners();
  }

  // Notifying the listener of an event
  $emit(event, ...args) {
    this.emitter.emit(event, ...args);
  }

  // Deleting a component
  // Clean up the listener
  destroy() {
    this.removeDOMListeners();
  }
}

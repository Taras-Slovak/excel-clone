import {capitalize} from '@core/utils';

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(`No $root provided for DomListener`);
    }
    this.$root = $root;
    this.listeners = listeners;
  }
  initDOMlisteners() {
    this.listeners.forEach(listener => {
      const method = getMethodName(listener);
      if (!this[method]) {
        const name = this.name || '';
        throw new Error(
            `Method ${method} in not implemented is ${name} Component`);
      }
      // it same as addEventListener
      this.$root.on(listener, this[method].bind(this));
    });
  }

  removeDOMlisteners() {

  }
}
// input => onInput
function getMethodName(evenName) {
  return 'on' + capitalize(evenName);
}

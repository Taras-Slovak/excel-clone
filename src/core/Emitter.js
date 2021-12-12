export class Emitter {
  constructor() {
    this.listeners = {};
  }
  // dispatch, fire, trigger
  // We inform the listeners if they are
  emit() {

  }
  // on, listen
  // Subscribe to notifications
  // Add a new listener
  subscribe(event, fn) {
    this.listeners[event] = this.listeners[event] || [];
    this.listeners[event].push(fn);
  }
}

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(`No $root provided for DomListiner`);
    }
    this.$root = $root;
    this.listeners = listeners;
  }
  initDOMlisteners() {

  }
  removeDOMlisteners() {

  }
}

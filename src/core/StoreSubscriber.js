export class StoreSubscriber {
  constructor(store) {
    this.store = store;
    this.sub = null;
    this.prevState = {};
  }
  subscribeComponents(components) {
    this.prevState = this.store.getStore();
    this.sub = this.store.subscribe(state => {
      Object.keys(state).forEach(key => {
        console.log(key);
      });
    });
  }
  unsubscribeFromStore() {
    this.sub.unsubscribe();
  }
}

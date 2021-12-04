class Dom {
  constructor(selector) {
    // #app
    this.$el = typeof selector ==='string'
      ? document.querySelector(selector)
      : selector;
  }
}

// event.target
export function $(selector) {
  return new Dom(selector);
}
$.create =(tagName, classes = '') => {
  const el = document.createElement(tagName);
  if (classes) {
    el.classList.add(classes);
  }
  return el;
};

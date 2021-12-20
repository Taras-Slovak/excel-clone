import {ExcelComponent} from '@core/ExcelComponent';
import {createToolbar} from '@/components/toolbar/toolbar.template';

export class Toolbar extends ExcelComponent {
  static className = 'excel__toolbar';

  constructor($root, options) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click'],
      ...options
    });
  }

  toHTML() {
    return createToolbar();
  }
  onClick(event) {
    console.log(event.target);
  }
}

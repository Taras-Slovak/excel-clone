function toButton(button) {
  const meta = `data-type="button"`;
  return `
    <div
      class="button ${button.active ? 'active' : ''}" ${meta}>
      <i class="material-icons" ${meta}>${button.icon}</i>
    </div>`;
}

export function createToolbar() {
  const buttons = [
    {
      icon: 'format_align_left',
      active: false
    },
    {
      icon: 'format_align_center',
      active: true
    },
    {
      icon: 'format_align_right',
      active: false
    },
    {
      icon: 'format_bold',
      active: true
    },
    {
      icon: 'format_italic',
      active: false
    },
    {
      icon: 'format_underlined',
      active: false
    },
  ];
  return buttons.map(toButton).join('');
}

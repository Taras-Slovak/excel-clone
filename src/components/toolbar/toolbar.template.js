function toButton(button) {
  return `
    <div class="button">
      <i class="material-icons">${button.icon}</i>
    </div>`;
}

export function createToolbar() {
  const buttons = [
    {
      icon: 'format_align_left'
    },
    {
      icon: 'format_align_center'
    },
    {
      icon: 'format_align_right'
    },
    {
      icon: 'format_bold'
    },
    {
      icon: 'format_italic'
    },
    {
      icon: 'format_underlined'
    },
  ];
  return `
      <div class="button">
          <i class="material-icons">format_align_left</i>
      </div>
      
      <div class="button">
          <i class="material-icons">format_align_center</i>
      </div>
      
      <div class="button">
          <i class="material-icons">format_align_right</i>
      </div>
      
      <div class="button">
          <i class="material-icons">format_bold</i>
      </div>
      
      <div class="button">
          <i class="material-icons">format_italic</i>
      </div>
      
      <div class="button">
          <i class="material-icons">format_underlined</i>
      </div>
  `;
}

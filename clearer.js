const blackList = [
  'butterBar--privacy',
  'js-metabarMiddle',
  'js-stickyFooter',
  'js-postShareWidget',
  'js-directEmailSignupContainer',
  'js-metabarSpacer',
  'overlay--light',
  'u-borderTopLighter',
]

let css = 'body > * { pointer-events: auto !important; } .u-overflowHidden{ overflow: auto !important; }';

const style = document.createElement('style');
style.type = 'text/css';

document.body.appendChild(style);

blackList.forEach(e => {
  css += `.${e} { display: none !important} `;
})

style.appendChild(document.createTextNode(css));

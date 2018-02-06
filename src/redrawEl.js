'use strict';

// https://stackoverflow.com/questions/8840580/force-dom-redraw-refresh-on-chrome-mac
// https://stackoverflow.com/questions/3485365/how-can-i-force-webkit-to-redraw-repaint-to-propagate-style-changes/3485654#3485654

export default (el) => {
    const dis = el.style.display
    el.style.display = 'none'
    el.offsetHeight
    el.style.display = dis
}
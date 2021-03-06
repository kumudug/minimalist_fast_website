/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "glo" }]*/

//Common styles
import './app.scss';

// Material Imports
import {MDCTopAppBar} from '@material/top-app-bar';
import {MDCRipple} from '@material/ripple';

const selector = '.mdc-button, .mdc-card__primary-action';
const gloRipples = [].map.call(document.querySelectorAll(selector), function(el) {
  return new MDCRipple(el);
});

const iconButtonRipple = new MDCRipple(document.querySelector('.mdc-icon-button'));
iconButtonRipple.unbounded = true;

const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const gloTopAppBar = new MDCTopAppBar(topAppBarElement);


//Common Images
import gloIcon from './res/icon.png';





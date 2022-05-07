import ScrollSuave from './modules/scroll-suave.js';
import ScrollAnimation from './modules/scroll-animation.js';
import Accordion from './modules/accordian.js';
import TabNav from './modules/tabnav.js';
import Modal from './modules/modal.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import fetchRanking from './modules/fetch-ranking.js';
import Tooltip from './modules/tooltip.js';

const scrollSuave = new ScrollSuave('.js-menu a[href^="#');
scrollSuave.init();

const accordion = new Accordion('.js-accordion dt');
accordion.init();

const tabNav = new TabNav('.js-tabmenu li', '.js-tabcontent section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

const scrollAnimation = new ScrollAnimation('.js-scroll');
scrollAnimation.init();

fetchRanking('../../ranking.json', '.numeros-grid');

initDropdownMenu();
initMenuMobile();

import ScrollSuave from './modules/scroll-suave.js';
import initAnimationScroll from './modules/scroll-animacao.js';
import Accordion from './modules/accordian.js';
import TabNav from './modules/tabnav.js';
import initModal from './modules/modal.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFetchRanking from './modules/fetch-ranking.js';

const scrollSuave = new ScrollSuave('.js-menu a[href^="#');
scrollSuave.init();

const accordion = new Accordion('.js-accordion dt');
accordion.init();

const tabNav = new TabNav('.js-tabmenu li', '.js-tabcontent section');
tabNav.init();

initAnimationScroll();
initModal();
initDropdownMenu();
initMenuMobile();
initFetchRanking();

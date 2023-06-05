import Store from './modules/books_functions.js';
import { configNavItems } from './modules/nav_functions.js';
import { setdate } from './modules/current_datetime.js';

Store.init();
configNavItems();
setdate();
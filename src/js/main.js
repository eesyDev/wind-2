import modals from "./modules/modals";
import timer from './modules/timer';
import tabs from './modules/tabs';
import image from './modules/images';
import forms from "./modules/forms";

let deadline = '2024-08-29';
const data = {};
image();
modals();
timer(deadline);
tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after-click');
tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more');
forms(data);
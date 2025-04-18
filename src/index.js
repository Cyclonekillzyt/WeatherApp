import './style.css';
import { updateBgVideo } from './bgVideo';
import {searchItems} from './search.js'
const form = document.getElementById('form');



form.addEventListener('submit', (e) => {
  e.preventDefault();
  searchItems();
  updateBgVideo();
});





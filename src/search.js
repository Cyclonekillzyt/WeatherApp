import { fetchWeather } from './fetchData';
const search = document.getElementById('search');
let searchTerm = null;

function searchItems() {
  searchTerm = search.value;
  search.placeholder = searchTerm;
  search.value = '';
  fetchWeather(searchTerm);
}

export { searchItems };

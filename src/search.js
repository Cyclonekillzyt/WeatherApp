const search = document.getElementById('search');

function searchItems() {
  const searchTerm = search.value;
  search.placeholder = searchTerm;
  search.value = '';
  return { searchTerm };
}

export { searchItems };


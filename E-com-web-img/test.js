const searchIcon = document.querySelector(`.search_icon`);
const searchBar = document.querySelector(`.searchBar`);

searchIcon.addEventListener(`click`, function(){
    searchBar.classList.toggle(`display_searchBar`)
})
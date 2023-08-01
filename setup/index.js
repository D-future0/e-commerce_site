/* search toggle*/
const searchIcon = document.querySelector(`.search_icon`);
const searchBar = document.querySelector(`.searchBar2`);

searchIcon.addEventListener(`click`, function(){
    searchBar.classList.toggle(`display_searchBar2`)
});
/* advance Menu setup*/
const advanceMenu = document.querySelector(`.advanceMenu`);
const tabs = document.querySelectorAll(`.tab`)
const tabOpts = document.querySelectorAll(`.tab-opts`)

advanceMenu.addEventListener(`click`, (event)=>{
    const id = event.target.dataset.id
        if(id){
            tabs.forEach((tab)=>{
            tab.classList.remove(`active`);
            event.target.classList.add(`active`);
            })
            tabOpts.forEach((opt)=>{
                opt.classList.remove(`active`);
            });
            const activeTab = document.getElementById(id)  
            activeTab.classList.add(`active`) 
        } 
})
advanceMenu.addEventListener(`dblclick`, (event)=>{
            tabs.forEach((tab)=>{
            tab.classList.remove(`active`);
            });
            tabOpts.forEach((opt)=>{ 
                opt.classList.remove(`active`);
            });
        });

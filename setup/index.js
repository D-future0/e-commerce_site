const items = [
    {imageSrc:`"/E-com-web-img/phoneDir/tecnoCamon18.jpg"`, itemName:`tecno Camon18`, itemPrice:`97000`, productName:`tecno`, itemCategory:`phone`, itemSubCategory:`andriod`, expressDelivery:`True`, promo:`True`},
    {imageSrc:`"/E-com-web-img/phoneDir/tecnoSpark10.jpg"`, itemName:`tecno Spark10`, itemPrice:`65000`, productName:`tecno`, itemCategory:`phone`, itemSubCategory:`andriod`, expressDelivery:`False`, promo:`True`},
    // {imageSrc:, itemName:, itemPrice:, productName:, itemCategory:, itemSubCategory:, expressDelivery:, promo:,},
]

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
advanceMenu.addEventListener(`dblclick`, ()=>{
            tabs.forEach((tab)=>{
            tab.classList.remove(`active`);
            });
            tabOpts.forEach((opt)=>{ 
                opt.classList.remove(`active`);
            });
        });

        /** display setup **/
 const expressDelivery = document.querySelector(`.expressDelivery`);
 const promotions = document.querySelector(`.promotions`);
 const seeAllItem = document.querySelectorAll(`.see-All-btn`);
 const expressTitle = document.querySelector(`.express`);
 const promoContainer = document.querySelector(`.promo-container`);
 const expressContainer = document.querySelector(`.express-container`);
 
 seeAllItem.forEach(function (btn) {
     btn.addEventListener(`click`, function(e) {
    const click = e.currentTarget.dataset.id
    const expressId = `seeAll-experess`
    const promoId =`seeAll-promo`
    if(click === expressId){
        expressDelivery.style.height= `100vh`
        promoContainer.style.display= `none`
        btn.style.visibility= `hidden`
    }
    if(click === promoId){
        promotions.style.height= `100vh`
        expressContainer.style.display= `none`
        btn.style.visibility= `hidden`
    }

});
 });

window.addEventListener(`DOMContentLoaded`, function (){
    displayAllExpressDeliveryItems(items)
    displayAllPromotionItems(items)
 }); 

//  see all items
// const seeAllExpressItem = document.querySelector(`#seeAll-experess`);
// const seeAllpromoItem = document.querySelector(`#seeAll-promo`);
// console.log(seeAllItem)
// seeAllItem.addEventListener(`click`, function (event) {
//     const btn = event.currentTarget.dataset.id
//     console.log(btn)
// });

 /** functions **/
//  functions all items function
let displayAllItems = (allItems, category) => {
    displayItem = allItems.map((item) => {
        return `<div class="card-container">
        <article class="card">
            <div class="img-container">
                <img src=${item.imageSrc} alt="tecnoCamon18" class="item-img">
            </div>
            <div class="info-container">
                <p class="item-name">${item.itemName}</p>
                <p class="item-price">${item.itemPrice}N</p>
            </div>
            <div class="button-container">
                <button type="submit" class="btn">Add To Cart</button>
            </div>
        </article>
    </div>
</div>`
})
    displayItem = displayItem.join(``)
    category.innerHTML = displayItem

};
// display express delivery function
function displayAllExpressDeliveryItems() {
    let express= `True`
    displayexpressItems = items.filter((item) => {
        if (item.expressDelivery===express) {
            return item
        }
    })
    displayAllItems(displayexpressItems, expressDelivery)
}
// display express delivery function
function displayAllPromotionItems() {
    let promos= `True`
    displayPromoItems = items.filter((item) => {
        if (item.promo===promos) {
            return item
        }
    })
    displayAllItems(displayPromoItems, promotions)
}

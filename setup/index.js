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
/* cart toggle */
// const cartBtn = document.querySelector('.my-cart');
// const myCart = document.querySelector('.cart-section');
// const showCart = document.querySelector('.show-cart');

// cartBtn.addEventListener(`click`, function(){
//     myCart.classList.toggle(`showCart`);
//     console.log(myCart)
// });
const cartBtn = document.querySelector('.my-cart');
const closeCartSection = document.querySelector(".close-cart-section");
const cartSection = document.querySelector(".cart-section");

cartBtn.addEventListener("click", function(){
    cartSection.classList.toggle("show-sidebar")
})
closeCartSection.addEventListener("click", function(){
    cartSection.classList.remove("show-sidebar")
})
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
 const expressTitle = document.querySelector(`.express`);
 const seeAllItem = document.querySelectorAll(`.see-All`);
 const allItems = document.querySelectorAll(`.items`);
 const promoContainer = document.querySelector(`.promo-container`);
 const expressContainer = document.querySelector(`.express-container`);
 
 seeAllItem.forEach(function (btn) {
     btn.addEventListener(`click`, function(e) {
    let click = e.currentTarget.dataset.id
    const expressId = `seeAll-express`
    const promoId =`seeAll-promo`
    
        if(click === expressId && btn.innerHTML === `See all` ){
            expressDelivery.style.height= `100vh`
            promoContainer.style.display= `none`
            btn.innerHTML = `See less`
        }
        else if(click === promoId && btn.innerHTML === `See all` ){
            promotions.style.height= `100vh`
            expressContainer.style.display= `none`
            btn.innerHTML = `See less`
        }
        else{
            expressDelivery.style.height= `350px`
            promotions.style.height= `350px`
            expressContainer.style.display= `inline`
            promoContainer.style.display= `inline`
            btn.innerHTML = `See all`
        }
});
 });

//  






























window.addEventListener(`DOMContentLoaded`, function (){
    displayAllExpressDeliveryItems(items)
    displayAllPromotionItems(items)

    const addToCartBtn = document.querySelectorAll(`.btn`);
    const mything = document.querySelectorAll(`.item-name`);
    console.log(mything)
    addToCartBtn.forEach(btn => {
        btn.addEventListener(`click`, function(btn){
            const selectedItem = btn.currentTarget.parentElement.parentElement;
            const element = selectedItem.firstElementChild.nextSibling.nextSibling
            console.log(element)
        })
    })

 }); 

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

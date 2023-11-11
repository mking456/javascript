let bagObjectItems;
onLoad();

function onLoad(){
  displayBagItems();
  newbagObjectItems();

}

function newbagObjectItems(){
  console.log(bagItems);
  bagItems.map(itemsId =>{
    for(let i = 0; i < items.length;i++){
        if(itemsId == items[i].id){
          return items[i];
        }
    }
  });
  console.log(bagObjectItems);
}

function displayBagItems(){
  let displayBagItemsElement = document.querySelector('.bag-items-container');
  //displayBagItemsElement.innerHTML = 
}

function generateItemHtml(item){
  return `<div class="bag-item-container">
  <div class="item-left-part">
    <img class="bag-item-img" src="../${item.image}">
  </div>
  <div class="item-right-part">
    <div class="company">ADIDAS</div>
    <div class="item-name">Men Printed Polo Collar Indian Cricket ODI Jersey</div>
    <div class="price-container">
      <span class="current-price">Rs 999</span>
      <span class="original-price">Rs 999</span>
      <span class="discount-percentage">(0% OFF)</span>
    </div>
    <div class="return-period">
      <span class="return-period-days">14 days</span> return available
    </div>
    <div class="delivery-details">
      Delivery by
      <span class="delivery-details-days">10 Oct 2023</span>
    </div>
  </div>

  <div class="remove-from-cart">X</div>
</div>`
}
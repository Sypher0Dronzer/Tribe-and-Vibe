let productsDiv=document.querySelector('.flex-div')
let productsDivHTML=``;
for (let i = 0; i < 20; i++) {
    productsDivHTML+=`
    <div class="product-card">
    <div class="img-div">
        <img src="images/ornament1.png" alt="" class="product-img">
    </div>
    <div class="nameNprice">
        <h4>Product Name</h4>
        <p>$45.00</p>
    </div>
    <div class="button-div">
        <button>Add to cart</button>
        <button>Buy Now</button>
    </div>
</div>`    
}
productsDiv.innerHTML=productsDivHTML
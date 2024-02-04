let nowShowing = document.querySelector(".now-show-div");
let popularShowing = document.querySelector(".popular-show-div");
let acessories = document.querySelector(".accessories-div");

let nowShowHTML = "";
let popularShowHTML = "";
let acessoriesHTML=''

// ----------------------------Now showing---------------------
for (let i = 0; i < 20; i++) {
    nowShowHTML+=`
    <div class="swiper-slide ">
                <div class="show-div">
                  <img src="images/homebg2.png" alt="" />
                  <div class="show-details">
                    <h3>Show Name</h3>
                  <button class="book-show"><img src="icons/Sum.png" alt="" />Book</button>
                  </div>
                  
                </div>
              </div>`    
}
// ----------------------popular shows---------------------
for (let i = 0; i < 20; i++) {
    popularShowHTML+=`
    <div class="swiper-slide ">
                <div class="show-div">
                  <img src="images/homebg2.png" alt="" />
                  <div class="show-details">
                    <h3>Show Name</h3>
                  <button class="book-show"><img src="icons/Sum.png" alt="" />Book</button>
                  </div>
                  
                </div>
              </div>`    
}
// -----------------------products----------------------
for (let i = 1; i < 7; i++) {
  acessoriesHTML+=`
  <div class="swiper-slide">
              <div class="show-div">
                <img src="images/ornament${i}.png" alt="" />
                <div class="show-details">
                  <h3>Product Name</h3>
                  <p>$45.00</p>
                  <button class="book-show buy-btn">Buy Now
                  </button>
                  <button class="book-show">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>`
}

nowShowing.innerHTML = nowShowHTML;
popularShowing.innerHTML=popularShowHTML;
acessories.innerHTML=acessoriesHTML;

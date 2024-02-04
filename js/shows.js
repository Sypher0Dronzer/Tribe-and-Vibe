let nowShowing = document.querySelector(".now-show-div");
let popularShowing = document.querySelector(".popular-show-div");
let nowShowHTML = "";
let popularShowHTML = "";

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
nowShowing.innerHTML = nowShowHTML;
popularShowing.innerHTML=popularShowHTML;


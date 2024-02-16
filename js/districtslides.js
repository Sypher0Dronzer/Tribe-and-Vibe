let districtSlides1 = document.querySelector(".slide1");
let slide1HTML='';

for (let i = 0; i < 7; i++) {
    slide1HTML+=`
    <div class="swiper-slide">
    <img src="images/ornament1.png" alt="">
    </div>`    
  }
districtSlides1.innerHTML=slide1HTML;
// -----------------slide2---------------
let districtSlides2 = document.querySelector(".slide2");
let slide2HTML='';

for (let i = 1; i < 7; i++) {
  slide2HTML+=`
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
districtSlides2.innerHTML=slide2HTML;

// -----------------slide3---------------
let districtSlides3 = document.querySelector(".slide3");
let slide3HTML='';

for (let i = 0; i < 7; i++) {
    slide3HTML+=`
    <div class="swiper-slide">
    <img src="images/ornament1.png" alt="">
    </div>`    
  }
districtSlides3.innerHTML=slide3HTML;
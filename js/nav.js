let navDiv= document.createElement('div')
navDiv.innerHTML=`
<div class="navbar laptop-min">
      <div class="nav-top">
        <a href="">
          <img src="icons/Cat Footprint.png" alt="" />
        </a>
      </div>
      <div class="nav-mid">
        <a href="index.html">
          <img src="icons/Home Page.png" alt="" />
        </a>
        <a href=""><img src="icons/Search.png" alt="" /></a>
        <a href="./wb.html"><img src="icons/Compass.png" alt="" /></a>
        <a href=""><img src="icons/Shopping Cart.png" alt="" /></a>
        <a href=""><img src="icons/Theatre Mask.png" alt="" /></a>
        <a href="./accessories.html"><img src="icons/Bracelet.png" alt="" /></a>
        <a href="index.html#abt-us"><img src="icons/Info.png" alt="" /></a>
      </div>
      <div class="nav-bottom">
        <a href="account.html">
          <img src="icons/User.png" alt="" />
        </a>
        <a href="">
          <img src="icons/Logout Rounded Left.png" alt="" />
        </a>
      </div>
    </div>

    <div class="navbar laptop-max">
      <div class="nav-top">
        <a href="">
          <img src="icons/Cat Footprint.png" alt="" />
          <h4>LOGO</h4>
        </a>
      </div>
      <div class="nav-mid">
        <a href="index.html">
          <img src="icons/Home Page.png" alt="" />
          <h4>Home</h4>
        </a>
        <a href=""
          ><img src="icons/Search.png" alt="" />
          <h4>Search</h4>
        </a>
        <a href="./wb.html"
          ><img src="icons/Compass.png" alt="" />
          <h4>Explore</h4>
        </a>
        <a href=""
          ><img src="icons/Shopping Cart.png" alt="" />
          <h4>Cart</h4>
        </a>
        <a href=""
          ><img src="icons/Theatre Mask.png" alt="" />
          <h4>Shows</h4>
        </a>
        <a href="./accessories.html"
          ><img src="icons/Bracelet.png" alt="" />
          <h4>Accessories</h4>
        </a>
        <a href="index.html#abt-us"
          ><img src="icons/Info.png" alt="" />
          <h4>About Us</h4>
        </a>
      </div>
      <div class="nav-bottom">
        <a href="account.html">
          <img src="icons/User.png" alt="" />
          <h4>Profile</h4>
        </a>
        <a href="">
          <img src="icons/Logout Rounded Left.png" alt="" />
          <h4>Exit</h4>
        </a>
      </div>
    </div>
    <div class="mobile-nav">
      <a href=""><img src="icons/Cat Footprint.png" alt="" srcset="" /></a>
      <div class="menu-toggle">
        <img src="icons/Menu.png" alt="" />
      </div>
    </div>`

    document.querySelector('body').appendChild(navDiv)
// bodyHTML+=`
// <div class="navbar laptop-min">
//       <div class="nav-top">
//         <a href="">
//           <img src="icons/Cat Footprint.png" alt="" />
//         </a>
//       </div>
//       <div class="nav-mid">
//         <a href="index.html">
//           <img src="icons/Home Page.png" alt="" />
//         </a>
//         <a href=""><img src="icons/Search.png" alt="" /></a>
//         <a href="./wb.html"><img src="icons/Compass.png" alt="" /></a>
//         <a href=""><img src="icons/Shopping Cart.png" alt="" /></a>
//         <a href=""><img src="icons/Theatre Mask.png" alt="" /></a>
//         <a href="./accessories.html"><img src="icons/Bracelet.png" alt="" /></a>
//         <a href=""><img src="icons/Info.png" alt="" /></a>
//       </div>
//       <div class="nav-bottom">
//         <a href="account.html">
//           <img src="icons/User.png" alt="" />
//         </a>
//         <a href="">
//           <img src="icons/Logout Rounded Left.png" alt="" />
//         </a>
//       </div>
//     </div>

//     <div class="navbar laptop-max">
//       <div class="nav-top">
//         <a href="">
//           <img src="icons/Cat Footprint.png" alt="" />
//           <h4>LOGO</h4>
//         </a>
//       </div>
//       <div class="nav-mid">
//         <a href="index.html">
//           <img src="icons/Home Page.png" alt="" />
//           <h4>Home</h4>
//         </a>
//         <a href=""
//           ><img src="icons/Search.png" alt="" />
//           <h4>Search</h4>
//         </a>
//         <a href="./wb.html"
//           ><img src="icons/Compass.png" alt="" />
//           <h4>Explore</h4>
//         </a>
//         <a href=""
//           ><img src="icons/Shopping Cart.png" alt="" />
//           <h4>Cart</h4>
//         </a>
//         <a href=""
//           ><img src="icons/Theatre Mask.png" alt="" />
//           <h4>Shows</h4>
//         </a>
//         <a href="./accessories.html"
//           ><img src="icons/Bracelet.png" alt="" />
//           <h4>Accessories</h4>
//         </a>
//         <a href="#abt-us"
//           ><img src="icons/Info.png" alt="" />
//           <h4>About Us</h4>
//         </a>
//       </div>
//       <div class="nav-bottom">
//         <a href="account.html">
//           <img src="icons/User.png" alt="" />
//           <h4>Profile</h4>
//         </a>
//         <a href="">
//           <img src="icons/Logout Rounded Left.png" alt="" />
//           <h4>Exit</h4>
//         </a>
//       </div>
//     </div>
//     <div class="mobile-nav">
//       <a href=""><img src="icons/Cat Footprint.png" alt="" srcset="" /></a>
//       <div class="menu-toggle">
//         <img src="icons/Menu.png" alt="" />
//       </div>
//     </div>`




let navDropDown= document.querySelector('.laptop-max')
let menuToggle= document.querySelector('.menu-toggle')
let isDropMenu=false;
menuToggle.addEventListener('click',()=>{
    toggleMenu()
})
function toggleMenu(){
    if(!isDropMenu){
        navDropDown.style.transform='translateX(0%)';
        isDropMenu=true;
        menuToggle.innerHTML=`<img src="icons/Multiply.png" alt="">`
        
    }
    else{
        navDropDown.style.transform='translateX(120%)'
        isDropMenu=false;
        menuToggle.innerHTML=`<img src="icons/Menu.png" alt="">`
    }
}

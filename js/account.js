let login = document.querySelector(".login-div");
let register = document.querySelector(".register-div");
login.style.transform = `translateX(0%)`;
function toggleAccount() {
  if (login.style.transform == `translateX(0%)`) {
    login.style.transform = `translateX(-100%)`;
    register.style.transform = `translateX(-100%)`;
  }
  else{
    login.style.transform = `translateX(0%)`;
    register.style.transform = `translateX(0%)`;
  }
}

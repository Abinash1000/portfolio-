console.log(`hi'🙂 every one,You entered a deferent world Than you..❤❤❤❤ for visiting my website💻(●'◡'●)(●'◡'●).`);
//Nav section

let liList = document.querySelectorAll(".nav-li-a");
liList.forEach(allLiList =>{
  allLiList.addEventListener("click", function(){
    liList.forEach(rem => rem.classList.remove("active-li-a"));
    this.classList.add("active-li-a");
  });
});


// This javascript for to the button
let mybutton = document.getElementById("myBtn");
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
   document.querySelector(".list-item").style.marginRight = "25rem";
   document.querySelector(".logo-and-signeture").style.opacity  = "0";
   
  }
  else{
    document.querySelector(".list-item").style.marginRight = "2.1rem";
    document.querySelector(".logo-and-signeture").style.opacity  = "1";
  }  

}
function topFunction(){ 
  let liList = document.querySelectorAll(".nav-li-a");
liList.forEach(allLiList =>{
    liList.forEach(rem => rem.classList.remove("active-li-a"));
    document.getElementById("nav-li-a-home").classList.add("active-li-a");
});
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
//This javascript is for skill scection.......




 
//contactsection javascript
document.querySelector('#contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.elements.name.value = '';
  e.target.elements.email.value = '';
  e.target.elements.message.value = '';
});
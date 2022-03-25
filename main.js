window.onscroll = function() {myFunction()};

const notification = document.getElementById("notification");

const header = document.getElementById("header");
const sticky = header.offsetTop;

function myFunction() {
    notification.style.display= "block";
    if (window.pageYOffset > sticky) {
        header.classList.add("fixed-top");
    }
    else if (window.pageYOffset > sticky) {
        header.classList.add("fixed-top");
    } else {
        header.classList.remove("fixed-top");
    }
}


function closeHide () {
  notification.style.display= "none";
  bool = false;
  
  window.scrollTo({
    top: 300,
    behavior: 'smooth'
  });



}

setInterval(function() {
    if(bool === false){ console.log("its works")}
    notification.style.display= "block";
    bool = true;
},  (10 *60 *1000));

   






// prompt untuk minta id atau input ke user
//prompt (message)
// prompt("What's your name")
// prompt (message, defaultValue)
// deklarasi data bisa menggunakan var, let and const
// var and let memungkinkan untuk mengubah nilai ketika submit
    // var number = 10;
    // number = 11; 

    // const tidak bisa mengubah nilai
    //const number = 10;
    //number = 11; 

// let buttonName = document.getElementById('buttonName')
// buttonName.addEventListener("click", function(){
// replaceName()
// })

const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});

// function replaceName (){
//     let buttonName= prompt ("what's you name?", "");
//     document.getElementById("buttonName").innerHTML = buttonName
//     }
//     replaceName();

// document.getElementById('buttonName')
//     .addEventListener("click", function(){
//     replaceName()
// })
    

// let nameInput = document.getElementById('name-Input')
// document.getElementById('submit').addEventListener("click", function(){
//     const name = nameInput.value
//     document.getElementById('name').innerHTML = name
// })

function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
}
  }

//message
function submitForm() {
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
  
    alert(`Email: ${email}\nSubject: ${subject}\nMessage: ${message}`);
  }

//footer
// Get & Store Date
var today = new Date();
today = today.getFullYear();

// Check Date
console.log(today);

// Display Date
$('.year').text(today);





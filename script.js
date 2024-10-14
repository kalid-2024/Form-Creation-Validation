
document.addEventListener('DOMContentLoaded' , function () {

const form = document.getElementById("registration-form");
const feedbackDiv = document.getElementById("form-feedback");

form.addEventListener('submit' , (event) => {
event.preventDefault();

const username = document.getElementById("username").value.trim();
const email = document.getElementById("email").value.trim();
const password = document.getElementById("password").value.trim();

let isValid = true ;
let messages = []; 

if (username.length < 3){
    isValid = false ;
    messages.push("Error! Username  must be greater than 3 characters!") ;
    }
if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    isValid = false ;
    messages.push("Error! Email does not contain '@'  and '.' special characters!");
}

if(password.length < 8){
    isValid = false ;
    messages.push("Password length should be at least 8 characters!");
}

// feedback message 

feedbackDiv.style.display = "block";
if (isValid){
    feedbackDiv.textContent = "Registration successful!";
    feedbackDiv.style.color = "#28a745";
    form.submit();
}else{
    feedbackDiv.innerHTML = messages.join("<br>");
    feedbackDiv.style.color = "#dc3545";
}


})

});
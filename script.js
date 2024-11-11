var nameError = document.querySelector(".nameError")
let numberError = document.querySelector(".numberError")
let emailError = document.querySelector(".emailError")
let messageError = document.querySelector(".messageError")
let submitError = document.querySelector(".submitError")

function validName(){
   let name = document.querySelector("#name").value

   if (name.length == 0){
    nameError.innerHTML = "name is required"
    return false;
   }
   if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)){
    nameError.innerHTML="write full name"
    return false;
   }
   nameError.innerHTML= '<i class="fa-solid fa-circle-check"></i>';
   return true;
}

function validNumber(){
    let number = document.querySelector("#number").value;
    if (number.length == 0){
        numberError.innerHTML = "Phone No. is required"
        return false;
       }
   
       if (number.length !== 10){
        numberError.innerHTML = "Phone No. should be of 10 digits"
        return false;
       }
       if (!number.match(/^\d{10}$/)){
        numberError.innerHTML = "Only digits please"
        return false;
       }
       numberError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
}

function validEmail(){
    let email = document.querySelector("#email").value;
    if (email.length == 0){
        emailError.innerHTML = "email is required"
        return false;
       }
       if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,7}$/)){
        emailError.innerHTML = "email is invalid"
        return false;
       }
       emailError.innerHTML =  '<i class="fa-solid fa-circle-check"></i>';
}

function validMessage(){
    let message = document.querySelector("#message").value;
    let required =20;
    let left = required-message.length;
    if (left>0){
        messageError.innerHTML = left + "more characters required";
        return false
    }
    messageError.innerHTML =  '<i class="fa-solid fa-circle-check"></i>';
}

function validSubmit(){
    if (!validName() || !validNumber() || !validEmail() || !validMessage()){
        submitError.innerHTML = "Please fix error before submitting"
        return false;
    }
    submitError.innerHTML = '';  
    return true; 
}

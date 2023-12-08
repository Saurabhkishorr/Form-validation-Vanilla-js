var firstname_error = document.getElementById("1stname-error");
var lastname_error = document.getElementById("lastname-error");
var mobileno_error = document.getElementById("Mobileno-error");
var email_error = document.getElementById("Email-error");
var message_error = document.getElementById("message-error");
var fix_error = document.getElementById("fix-error");

let validfirstname = ()=>{
    var firstname = document.getElementById("firstname").value
    if (firstname.length == 0) {
        firstname_error.innerHTML = "first name required";
        return false
    }
    if (!firstname.match(/^[a-zA-Z]*$/)) {
        firstname_error.innerHTML = "valid name required";
        return false
    }
    firstname_error.innerHTML = `<i class="fa-solid fa-circle-check fa-xl" style="color: #2e8b57;"></i>`;
    return true
}

let validlastname = ()=>{
    var lastname = document.getElementById("lastname").value
    if (lastname.length == 0) {
        lastname_error.innerHTML = "last name required";
        return false
    }
    if (!lastname.match(/^[a-zA-Z]*$/)) {
        lastname_error.innerHTML = "valid name required";
        return false
    }
    lastname_error.innerHTML = `<i class="fa-solid fa-circle-check fa-xl" style="color: #2e8b57;"></i>`;
    return true
}

let validmobileno = ()=>{
    var mobileno = document.getElementById("mobileno").value
    if (mobileno.length == 0) {
        mobileno_error.innerHTML = "mobile number required";
        return false
    }
    if (mobileno.length !== 10) {
        mobileno_error.innerHTML = "mobile number should be 10 digits";
        return false
    }
    if (!mobileno.match(/^[0-9]{10}/)){
        mobileno_error.innerHTML = "mobile number only in digits";
        return false
    }
    mobileno_error.innerHTML = `<i class="fa-solid fa-circle-check fa-xl" style="color: #2e8b57;"></i>`;
    return true
}

let validemail = ()=>{
    var email = document.getElementById("email").value
    if (email.length == 0) {
        email_error.innerHTML = "email id required";
        return false
    }
    
    if (!email.match(/^[a-zA-Z0-9_\-\.]+[@][a-z]+[\.][a-z]{2,3}$/)){
        email_error.innerHTML = "email id invalid";
        return false
    }
    email_error.innerHTML = `<i class="fa-solid fa-circle-check fa-xl" style="color: #2e8b57;"></i>`;
    return true
}
let validmessage = ()=>{
    var message = document.getElementById("message").value;
    var minvalue = 30;
    var remainingvalue = minvalue - message.length;

    if (remainingvalue > 0) {
        message_error.innerHTML =remainingvalue + " more characters required";
        return false
    }
    
    message_error.innerHTML = `<i class="fa-solid fa-circle-check fa-xl" style="color: #2e8b57;"></i>`;
    return true
}

let validatesubmit = ()=>{
   if (!validfirstname() || !validlastname() || !validmobileno() || !validemail() || !validmessage()){
      fix_error.style.display = "block";
      
      setTimeout(() => {
        fix_error.style.display = "none";
      }, 3000);
      return false;
   }
}
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');
const name_error = document.getElementById('name_error');
const email_error = document.getElementById('email_error');
const password_error = document.getElementById('password_error');

form.addEventListener('submit' , (e)=>{

    var email_check= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(name.value === '' || name.value == null){
        e.preventDefault();
        name_error.innerHTML = "name is required";
    }else{
        name_error.innerHTML = '';
    }
    if(!email.value.match(email_check)) {
        e.preventDefault();
        email_error.innerHTML = "valid email is required";
     }else{
        email_error.innerHTML = '';
     }
     if(password.value <=8){
        e.preventDefault();
        password_error.innerHTML = "password atleast contain 8 characters";
    }else{
        password_error.innerHTML = '';
        
    }
})


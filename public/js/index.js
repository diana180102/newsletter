//inputs
const inEmail = document.getElementById('email');

//form
const form = document.getElementById('form');

//elements
const label = document.querySelector('.labels');

const heading = document.querySelector('.heading');






//events
form.addEventListener('submit', validation);

//functions

function validation(e) {
    e.preventDefault();

    const email = inEmail.value.trim();

    if(email === '' || !validationEmail(email) || !email.includes('@') ){
         notification('Valid email required');
            
            inEmail.classList.add('input-error');
            
    }else{
       
        localStorage.setItem('email', email);  
         window.location.href = 'thanks.html';
    } 

   
          
    
   
    
}

//validation email
function validationEmail(email) {
    const regx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const result = regx.test(email);

    return result;
}


//alert
function notification(text) {
    clearNotification();
    const p = document.createElement('p');
    p.textContent = text;
    p.classList.add('error');
    
    label.appendChild(p);
}

// function notfication
function clearNotification() {
    const alert = document.querySelector('.error');

    if(alert){
        alert.remove();
    }
}


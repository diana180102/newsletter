
const btn = document.querySelector('.btn-dismiss');

document.querySelector('.email').innerHTML = localStorage.getItem('email');

        

btn.addEventListener('click', () =>{
        window.location.href('index.html');
});
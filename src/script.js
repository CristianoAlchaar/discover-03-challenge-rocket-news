const buttonSubmit = document.getElementById('button-submit');
const inputEmail = document.getElementById('email');

function handleButtonSubmitClick(){
    if(!inputEmail.value){
        alert('Por favor insira um email')
    }else{
        alert('Email enviado! Uhull!!!')
    }  
}

buttonSubmit.addEventListener('click', handleButtonSubmitClick)
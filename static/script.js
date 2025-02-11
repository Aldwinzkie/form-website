const password = document.querySelector('#pass');
const confirm_pass = document.querySelector('#con-pass');
const button = document.querySelector(".button-sub");
const input1 = document.querySelector("#con-pass:invalid");
const input2 = document.querySelector("#pass:invalid");

button.addEventListener('click', ()=> {
    if(confirm_pass.value != password.value){
        input1.setAttribute('style','border-color:red;');
        input2.setAttribute('style','border-color:red;');
    }else if(confirm_pass.value == password.value){
        input1.setAttribute('style','border-color:blue;');
        input2.setAttribute('style','border-color:blue;');
        event.preventDefault()
    }else{
        input1.setAttribute('style','border-color: hsl(0, 0%, 70%);');
        input2.setAttribute('style','border-color: hsl(0, 0%, 70%);');
    }
})

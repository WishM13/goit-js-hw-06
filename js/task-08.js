const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onSubmit);

function onSubmit(event){
    event.preventDefault();

    const email = formEl.email.value;
    const password = formEl.password.value;

    if (email === '' || password === '') {
    alert('Всі поля повинні бути заповнені!');
    }

    else{
        console.log(`email: ${email}`);
        console.log(`password: ${password}`);

        formEl.reset(); 
    }   
}

   


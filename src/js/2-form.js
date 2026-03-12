// const formEmail = document.querySelector('input[name="email"]');
// const formMassage = document.querySelector('textarea[name="message"]');
const form = document.querySelector('.feedback-form');

let formData = {email: "", message: ""};

if (localStorage.getItem("feedback-form-state") != {}) {
    const userEmailData = JSON.parse(localStorage.getItem("userEmail"));
    const userMassegeData = JSON.parse(localStorage.getItem("userMassage"));

    formEmail.value = userEmailData;
    formMassage.value = userMassegeData;
    form.name.value =  
}

form.addEventListener('input', event => {
    const userData = event.target.name.value.trim();
    localStorage.setItem(feedback-form-state, JSON.stringify(userData));
    console.log(userData);
});

// formMassage.addEventListener('input', event => {
//     const userData = event.target.value;
//     const userDataKey = 'userMassage';
//     localStorage.setItem(userDataKey, JSON.stringify(userData));
//     console.log(userData);
// });

form.addEventListener('submit', event => {
    event.preventDefault();
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userMassage');
    form.reset();
    console.log('Пусто');
});


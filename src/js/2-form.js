const localStorageKEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

const formData = {
    email: '',
    message: '',
};

// Мы загрузили данные из localStorage

const savedMessage = localStorage.getItem(localStorageKEY);
if (savedMessage) {
    try {
        const parsedMessage = JSON.parse(savedMessage);
        form.elements.email.value = parsedMessage.email || '';
        form.elements.message.value = parsedMessage.message || '';
        formData.email = parsedMessage.email || '';
        formData.message = parsedMessage.message || '';
    } catch (error) {
        console.warn('Ошибка при чтении из localStorage', error);
    }
}

// Мы вводим данные в форму

form.addEventListener('input', formEvent);
function formEvent(event) {
    // const formData = {
    //     email: form.elements.email.value,
    //     message: form.elements.message.value,
    // };
    const name = event.target.name;
    const value = event.target.value;
    formData[name] = value.trim();
    console.log(formData);
    localStorage.setItem(localStorageKEY, JSON.stringify(formData));
}

// Мы отправляем форму

form.addEventListener('submit', formSubmit);
function formSubmit(event) {
    event.preventDefault();
    console.log('Отправка формы');
    if (formData.email === '' || formData.message === '') {
        alert('Fill please all fields');
        return;
    }
    console.log(formData);

    form.reset();
    localStorage.removeItem(localStorageKEY);
    formData.email = '';
    formData.message = '';
}

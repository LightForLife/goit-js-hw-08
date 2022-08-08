// ================================
import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

const DATA_FORM_KEY = 'feedback-form-state';

// Ставим слушатели
refs.form.addEventListener('input', throttle(onCreateFormDataInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

// ================================
let formData = {};
readFormData();

function onFormSubmit(event) {
  // Запрещаем перезагрузку
  event.preventDefault();

  // Если поля не заполнены, выводим сообщение
  if (refs.email.value === '' || refs.textarea.value === '') {
    return alert('Все поля должны быть заполнены :)');
  }
  // Отправляем форму и очищаем поля
  event.currentTarget.reset();

  // Выводим данные в консоль
  console.log(formData);

  // Очищаем хранилище
  localStorage.removeItem(DATA_FORM_KEY);
}

function onCreateFormDataInput(event) {
  // Записываем данные в обьект formData
  formData[event.target.name] = event.target.value;

  // Преобразуем обьект в строку и сохраняем его в локальное хранилище
  const savedInput = JSON.stringify(formData);
  localStorage.setItem(DATA_FORM_KEY, savedInput);
}

function readFormData() {
  // По переменой savedData будем проверять есть ли что то в локальном хранилище
  const savedData = localStorage.getItem(DATA_FORM_KEY);

  // Eсли в хранилище есть данные, парсим оттуда строку в обьект,
  // и будут присвоены значения,
  // если там пусто значения будут пустой строкой
  if (savedData) {
    let savedFormData = {};

    try {
      savedFormData = JSON.parse(savedData);
    } catch (error) {
      console.log('Ошибка парсинга:', error);
    }
    formData.email = savedFormData.email || '';
    formData.message = savedFormData.message || '';

    refs.email.value = savedFormData.email || '';
    refs.textarea.value = savedFormData.message || '';
  }
}

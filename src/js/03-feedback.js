// ================================
const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

console.log(refs.form);
console.log(refs.email);
console.log(refs.textarea);

// const formData = {};

// Ставим слушатели
refs.form.addEventListener('input', onFormDataInput);
refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', onTextAreaInput);
// refs.email.addEventListener('input', onTextAreaInput);

//При загрузке страницы проверяй состояние хранилища,
// и если там есть сохраненные данные, заполняй ими поля формы.
// В противном случае поля должны быть пустыми.
const savedData = localStorage.getItem('feedback-form-state');

// ================================
populateInput();

const formData = {};

// console.log(refs.textarea.value);

function onFormSubmit(event) {
  event.preventDefault();

  // console.log(event);
}

function onFormDataInput(event) {
  // 1. Читаем сторедж

  const savedData = localStorage.getItem('feedback-form-state');

  console.log(event.target.name);
  console.log(event.target.value);
  // console.log(savedData);
  //   const savedText = JSON.parse(savedData);

  //   if (savedData) {
  //     const savedText = JSON.parse(savedData);
  //     refs.email.value = savedText.email;

  //     refs.textarea.value = savedText.message;
  //   }
  // 2. Преобразуем в обьект з JSON

  // 2. Преобразуем в массим з JSON
  // 3. Пушим в массив новые данные
  // 4. Конвертируем новый массив в JSON
  // 5. Записываем новый JSON в сторедж

  // Добавляем в обьект formData данные с инпутов,
  // name - ключ, value - значение.
  formData[event.target.name] = event.target.value;

  // Преобразуем обьект в строку и сохраняем его в локальное хранилище
  const savedInput = JSON.stringify(formData);
  // console.log(savedInput);
  // console.log(formData);

  localStorage.setItem('feedback-form-state', savedInput);
}

function populateInput() {
  const savedData = localStorage.getItem('feedback-form-state');
  const savedText = JSON.parse(savedData);
  // console.log(savedData);

  if (savedData) {
    refs.email.value = savedText.email || '';

    refs.textarea.value = savedText.message || '';
  }
}

const form = document.querySelector('.feedback-form');

const storedData = JSON.parse(localStorage.getItem('feedback-form-state'));

if (storedData) {
  form.elements.email.value = storedData.email;
  form.elements.message.value = storedData.message;
}

form.addEventListener('input', e => {
  const formData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', e => {
  e.preventDefault();

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (email && message) {
    const formData = {
      email,
      message,
    };
    console.log(formData);

    localStorage.removeItem('feedback-form-state');
    form.reset();
  }
});

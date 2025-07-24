btn.addEventListener('click', () => {
  const item = btn.closest('.cart-block__img-file');
  item.remove();
  el.value = ''; // ключевая строка
});

function clearFileInput() {
    const fileInput = document.getElementById('fileInput');
    fileInput.value = null; // или fileInput.value = "";
    // Или, если input находится внутри формы:
    // fileInput.form.reset();
  }
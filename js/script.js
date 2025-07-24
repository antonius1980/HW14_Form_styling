const btn = document.getElementById('profile_photo_remove');
const inputFile = document.getElementById('profile_pic');
const previewImage = document.querySelector('.profile-photo-row__image');

// При выборе файла — обновляем preview
inputFile.addEventListener('change', () => {
  const file = inputFile.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      previewImage.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

// При клике на Remove — сбрасываем input и картинку
btn.addEventListener('click', () => {
  inputFile.value = '';
  previewImage.src = './assets/img/profile_photo.png'; // путь по умолчанию
});

  const input = document.getElementById('profile_phone');
    Inputmask("+38 (099) 999-9999").mask(input);
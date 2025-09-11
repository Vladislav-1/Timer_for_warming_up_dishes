/* -- Переменные -- */
const mainButtonElement = document.querySelector(".main__button");
const mainTextElement = document.querySelector(".main__text");
let time;

/* -- Функция работает при клике по кнопке "Старт" -- */

mainButtonElement.addEventListener(
  "click",
  (startCookingTimer = (time, showMessage) => {
    mainTextElement.innerHTML = ``;
    function showMessage() {
      const dishName = document.querySelector(".main__inputDishName").value;
      mainTextElement.innerHTML = `Ваше блюдо "${dishName}" готово!<br>Приятного аппетита!`;
    }
    setTimeout(
      showMessage,
      (time = document.querySelector(".main__select").value)
    );
  })
);

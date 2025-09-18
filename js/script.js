
/* -- Переменные -- */
const mainButtonElement = document.querySelector(".main__button");
const mainTextElement = document.querySelector(".main__text");
const mainTimer = document.querySelector(".main__timer");

let time;

/* -- Функция работает при клике по кнопке "Старт" -- */

mainButtonElement.addEventListener(
  "click",
  (startCookingTimer = (time, showMessage) => {
    mainTextElement.innerHTML = ``;

    function showMessage() {
      const dishName = document.querySelector(".main__inputDishName").value;
      mainTextElement.innerHTML = `Ваше блюдо &laquo;<b>${dishName}</b>&raquo; готово!<br>Приятного аппетита!`;
    }

    const mainSelectElement = document.getElementById("main__select").value;
    let y = mainSelectElement;
    for (let i = y; i >= 0; i--) {
      setTimeout(() => {
        if (y > 9) {
          mainTimer.innerHTML = `00:${y}`;
        }
        if (y <= 9) {
          mainTimer.innerHTML = `00:0${y}`;
        }
        y = y - 1;
      }, 1000 * i);
    }

    setTimeout(
      showMessage,
      (time = document.getElementById("main__select").value * 1000)
    );
  })
);


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
    let z;
    let w;
    for (let i = y; i >= 0; i--) {
      setTimeout(() => {
        if (y >= 60) {
          z = Math.floor(y / 60);
          w = y - 60 * z;
          if (z > 9 && w > 9) {
            mainTimer.innerHTML = `${z}:${w}`;
          }
          if (z > 9 && w <= 9) {
            mainTimer.innerHTML = `${z}:0${w}`;
          }
          if (z <= 9 && w > 9) {
            mainTimer.innerHTML = `0${z}:${w}`;
          }
          if (z <= 9 && w <= 9) {
            mainTimer.innerHTML = `0${z}:0${w}`;
          }
        }
        if (y > 9 && y < 60) {
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

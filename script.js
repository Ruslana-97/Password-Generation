document.addEventListener('DOMContentLoaded', () => {
    const inputPasswordRandom = document.querySelector('.password-random');
    const iCopy = document.querySelector('.fa-copy');
    const updateBtn = document.querySelector('.fa-rotate');
    const inputLength = document.querySelector('.password-length-input');
    const rangeLength = document.querySelector('.password-length-range');
    const myChekbox = document.querySelectorAll('#checkmark');
     const btnCopy = document.querySelector('.btn');
     const kopiPass = document.querySelector('.modal-pass');

    // Генерація початкового пароля
    let initialLength = +inputLength.value || 10; // Встановлення початкової довжини пароля
    let initialPassword = generateRandomPassword(initialLength);
    inputPasswordRandom.value = initialPassword;

    // Забороняємо ввод із клавіатури
    inputPasswordRandom.addEventListener('keypress', (e) => {
        e.preventDefault();
    });
     
     function generPass() {
          let num = +inputLength.value;
          if (num > 30 || num < 5) {
               return
          } else {
               let password1 = generateRandomPassword(num);
               inputPasswordRandom.value = password1;
          }
       
     }
    // Генерація пароля при натисненні на іконку в інпуті
    updateBtn.addEventListener('click', () => {
        // Передаємо значення рендж та інпута у довжину пароля
         generPass();
    });

     function modalKopi() {
          kopiPass.classList.remove('hide');
        setTimeout(() => {
            kopiPass.classList.add('hide');
        }, 2000);
     }
    // Копіюємо пароль іконкою в інпуті в буфер обміну
    iCopy.addEventListener('click', () => {
        navigator.clipboard.writeText(inputPasswordRandom.value);
        modalKopi()
    });

    // Копіюємо пароль кнопкою
    btnCopy.addEventListener('click', () => {
         navigator.clipboard.writeText(inputPasswordRandom.value);
          modalKopi()
    });

    // Генерація пароля
    function generateRandomPassword(passLength1) {
        const numC = "0123456789";
        const upperC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowerC = "abcdefghijklmnopqrstuvwxyz";
        const symbolC = "!@#$%^&*()_+";
        let str1 = ' ';
        let allC = '';
        for (let item of myChekbox) {
            if (item.checked) {
               //   console.log(item.value);
                switch (item.value) {
                    case "numC":
                          allC += numC;
                        break
                    case "upperC":
                        allC += upperC;
                        break
                    case "lowerC":
                        allC += lowerC;
                        break
                    case "symbolC":
                        allC += symbolC;
                        break
                }
            } else {
                allC += str1;
            }
        }
        let randomPass = '';
        for (let i = 0; i < passLength1; i++) {
            let randomNum = Math.floor(Math.random() * allC.length);
            randomPass += allC[randomNum];
        }
        return randomPass;
    }

    // Зв'язуємо два інпута
    inputLength.addEventListener('input', () => {
        rangeLength.value = inputLength.value;
         generPass()
    });

    rangeLength.addEventListener('input', () => {
        inputLength.value = rangeLength.value;
         generPass()
    });
     myChekbox.forEach(checkbox => {
         checkbox.addEventListener('change', () => {
             generPass();
         });
     });
});

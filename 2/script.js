window.onload = function() {
  // Отримання посилань на кнопки
  var buttonG = document.getElementById("G");
  var buttonGr = document.getElementById("Gr");
  var buttonC = document.getElementById("C");
  var buttonCI = document.getElementById("CI");
  var buttonSH = document.getElementById("SH");

  // Додавання обробників подій для кожної кнопки
  buttonG.addEventListener("click", function() {
    alert("В своїй хаті своя й правда, І сила, і воля.");
  });

  buttonGr.addEventListener("click", function() {
    alert("Вітчизна — ось і альфа, і омега!\n");
  });

  buttonC.addEventListener("click", function() {
    alert("Нації вмирають не від інфаркту. Спочатку їм відбирає мову.");
  });

  buttonCI.addEventListener("click", function() {
    alert("Нема на світі України, немає другого Дніпра.");
  });

  buttonSH.addEventListener("click", function() {
    alert("Ще не вмерла України і слава, і воля.");
  });
};

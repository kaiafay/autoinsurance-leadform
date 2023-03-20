// forms
const startForm = document.getElementById("start-form");
const secondForm = document.getElementById("second-form");
const thirdForm = document.getElementById("third-form");
const fourthForm = document.getElementById("fourth-form");
const fifthForm = document.getElementById("fifth-form");
const endForm = document.getElementById("end-form");

// end and bottom pages
const endPage = document.getElementById("end-page");
const bottomPage = document.getElementById("bottom-page");

// form buttons
const startFormBtn = document.getElementById("get-started");
const secondFormBtn = document.getElementById("make-next");
const thirdFormBtn = document.getElementById("mileage-next");
const fourthFormBtn = document.getElementById("zipcode-next");
const fifthFormBtn = document.getElementById("name-next");
const endFormBtn = document.getElementById("get-quote");

// event listeners for buttons to make forms move
startFormBtn.onclick = function () {
  startForm.setAttribute("class", "hide");
  secondForm.classList.remove("hide");
};

secondFormBtn.onclick = function () {
  secondForm.setAttribute("class", "hide");
  thirdForm.classList.remove("hide");
};

thirdFormBtn.onclick = function () {
  thirdForm.setAttribute("class", "hide");
  fourthForm.classList.remove("hide");
};

fourthFormBtn.onclick = function () {
  fourthForm.setAttribute("class", "hide");
  fifthForm.classList.remove("hide");
};

fifthFormBtn.onclick = function () {
  fifthForm.setAttribute("class", "hide");
  endForm.classList.remove("hide");
};

endFormBtn.onclick = function () {
  endForm.setAttribute("class", "hide");
  bottomPage.setAttribute("class", "hide");
  endPage.classList.remove("hide");
};

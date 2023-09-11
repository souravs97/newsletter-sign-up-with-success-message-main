let submit = document.querySelector("#submit");
let dismiss = document.querySelector("#dismiss");
let input = document.querySelector("#mail");
let mainCont = document.querySelector(".main-container");
let msgCont = document.querySelector(".success-msg");
let error = document.querySelector(".error");

submit.addEventListener("click", function (e) {
  const mailId = input.value;
  const mailFormat = /^[a-zA-Z0-9._]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const idMatch = mailId.match(mailFormat);
  e.preventDefault();
  if (idMatch == null || mailId != idMatch) {
    error.style.display = "block";
    input.style.border = "2px solid var(--error)";
    input.style.color = "var(--error)";
    input.style.backgroundColor = "var(--error-bg)";
  } else {
    msgCont.style.display = "flex";
    mainCont.style.display = "none";
    const fetchMail = document.querySelector(".dynamic-mail");
    fetchMail.innerText = mailId;
  }
});
dismiss.addEventListener("click", function () {
  mainCont.style.display = "flex";
  msgCont.style.display = "none";
  window.location.reload();
});

const form = document.querySelector("#form-habits");
const nlwSetup = new NLWSetup(form);
const button = document.querySelector(".btnRegister");
const currentYear = document.querySelector(".newYear");

button.addEventListener("click", add);
form.addEventListener("change", save);

function add() {
  const day = new Date().toLocaleDateString("pt-br").slice(0, 5);
  const today = day;
  const dayExists = nlwSetup.dayExists(today);

  if (dayExists) {
    alert("Dia já incluso 🔴");
    return;
  }

  alert("Adicionado com sucesso ✅");
  nlwSetup.addDay(today);
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data));
}

function currentFullYear() {
  const newYear = new Date().getFullYear();
  currentYear.textContent = newYear;

}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {};

nlwSetup.setData(data);
nlwSetup.load();
currentFullYear();

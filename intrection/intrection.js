const saveEl = document.getElementById("save");
const promptEL = document.getElementById("prompt");

function alertFun() {
  alert("hello");
}

function confirmFun() {
  if (confirm("Do you want to save the changes") == true) {
    saveEl.innerHTML = "data save";
  } else {
    saveEl.innerHTML = "data not save";
  }
}

function promptFun() {
  let age = prompt("Enter ur age ");
  if (age >= 18) {
    promptEL.innerHTML = "voting allowed";
  } else {
    promptEL.innerHTML = " voting not allowed";
  }
}

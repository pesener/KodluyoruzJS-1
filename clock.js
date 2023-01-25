let userName = prompt("enter your name");
if (userName != null) {
  document.querySelector("#myName").innerHTML += userName;
}

function zaman() {
  const date = new Date().toLocaleString();
  document.getElementById(`myClock`).innerHTML = date;
}

setInterval(zaman, 1000);

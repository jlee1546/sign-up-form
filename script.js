const confirmedPassword = document.getElementById("confirmPwd");
confirmedPassword.addEventListener("blur", checkPasswordsEqual);

function checkPasswordsEqual() {
  const pwd = document.getElementById("password");
  const confirmedPwd = document.getElementById("confirmPwd");
  const visibleSpan = document.querySelector("span");

  if (pwd.value !== confirmedPwd.value) {
    visibleSpan.className = "visible";
  } else {
    visibleSpan.className = "invisible";
  }
}

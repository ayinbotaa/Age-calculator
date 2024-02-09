const btnEl = document.querySelector(".btn");
const birthDate = document.querySelector("#birthday-input");
const resultEl = document.querySelector(".result");

btnEl.addEventListener("click", function () {
  birthDateValue = birthDate.value;
  if (!birthDateValue) {
    alert("Please input a birth Year⚠️");
  } else {
    let age = getAge(birthDateValue);
    resultEl.textContent = `You are ${age} years old🙂`;
  }
});

function getAge(birthDateValue) {
  const currentDate = new Date();
  const birthDateYear = new Date(birthDateValue);
  age = currentDate.getFullYear() - birthDateYear.getFullYear();
  const month = currentDate.getMonth() - birthDateYear.getMonth();
  if (
    month < 0 ||
    (birthDateYear.getDate() > currentDate.getDate() && month <= 0)
  ) {
    age--;
    return age;
  } else {
    return age;
  }
}

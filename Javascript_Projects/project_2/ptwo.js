const form = document.querySelector("form");
//console.log(form);
form.addEventListener("submit", (e) => {
  //its used to block to send data on server, if its form we need either get or post
  //so to avoid that use below method, restricting it to js

  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");

  if (isNaN(height)) {
    result.innerHTML = `provide a valid height`;
  } else if (isNaN(weight)) {
    result.innerHTML = `provide a valid weight`;
  } else {
    const bmi = parseFloat((weight / ((height * height) / 10000)).toFixed(2));
    if (bmi < 18.6) {
      result.innerHTML = `<span>${bmi}</span><br>Under Weight`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      result.innerHTML = `<span>${bmi}</span><br>Normal Weight`;
    } else {
      result.innerHTML = `<span>${bmi}</span><br>Over weight`;
    }
  }
});

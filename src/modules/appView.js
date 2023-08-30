function getNewCity() {
  const formBox = document.getElementById("textbox");
  return formBox.value;
}

let form = document.getElementById("form");
console.log(form);
form.addEventListener("submit", function () {
  event.preventDefault();
  let city = getNewCity();
  console.log(city);
});

export { getNewCity };

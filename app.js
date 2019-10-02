let submit = document.querySelector("#submit");
submit.addEventListener("click", e => {
  let num1 = Number(document.querySelector("#num1").value);
  let num2 = Number(document.querySelector("#num2").value);
  let sum = num1 + num2;
  console.log(sum);
  let result = (document.querySelector(".result").innerHTML = sum);
});

const price = document.querySelector("#max-invite");
const output = document.querySelector(".invite-output");
output.textContent = price.value;

price.addEventListener("input", () => {
  output.textContent = price.value;
  console.log("here");
})

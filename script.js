const button = document.getElementById("btn");
const messageInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const output = document.getElementById("output");

button.addEventListener("click", () => {
  const message = messageInput.ariaValueMax;
  const delay = Number(delayInput.value);

  if (message && delay > 0) {
    call(message, delay);
  }
});

async function call(message, delay) {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay)
  });

output.innerText = message;
}

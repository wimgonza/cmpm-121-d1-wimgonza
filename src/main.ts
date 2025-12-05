import "./style.css";

let counter: number = 0;

document.body.innerHTML = `
  
`;

// Creation of counter div element
const counterDiv = document.createElement("div");
counterDiv.id = "counter";
counterDiv.textContent = "0.00 cringe 💀";
document.body.appendChild(counterDiv);

// Add click handler
const button = document.createElement("button");
button.id = "increment";
button.textContent = "💀";
document.body.appendChild(button);

button.addEventListener("click", () => {
  // console.log("I have these thingies:", button, counterElement, counter);
  // counter incremented by 1
  counter += 1;
  // update counter text
  counterDiv.textContent = `${counter.toFixed(2)} cringe 💀`;
});

// Continuous growth setup with requestAnimationFrame
let lastTime: number = performance.now();

function animate(currentTime: number) {
  const deltaTime = (currentTime - lastTime) / 1000;

  counter += deltaTime;

  counterDiv.textContent = `${counter.toFixed(2)} cringe 💀`;

  lastTime = currentTime;

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

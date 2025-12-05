import "./style.css";

let counter: number = 0;
let growthRate: number = 0;

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
button.textContent = "💀 Click me to express cringe";
document.body.appendChild(button);

button.addEventListener("click", () => {
  // console.log("I have these thingies:", button, counterElement, counter);
  // counter incremented by 1
  counter += 1;
  // update counter text
  updateButtonUI();
});

// Upgrade button setup
const upgradeButton = document.createElement("button");
upgradeButton.id = "upgrade";
upgradeButton.textContent = "Buy Auto Cringe (+1/sec) — Cost: 10 Cringe 💀";
upgradeButton.disabled = true;
document.body.appendChild(upgradeButton);

upgradeButton.addEventListener("click", () => {
  if (counter >= 10) {
    counter -= 10;
    growthRate += 1;
    updateButtonUI();
  }
});

// Continuous growth setup with requestAnimationFrame
let lastTime: number = performance.now();

function animate(currentTime: number) {
  const deltaTime = (currentTime - lastTime) / 1000;

  counter += growthRate * deltaTime;

  lastTime = currentTime;

  updateButtonUI();

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

// Button UI updater
function updateButtonUI() {
  counterDiv.textContent = `${
    counter.toFixed(2)
  } cringe 💀 | Rate: ${growthRate}/sec`;

  upgradeButton.disabled = counter < 10;
}

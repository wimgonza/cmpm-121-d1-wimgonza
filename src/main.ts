import "./style.css";

let counter: number = 0;

document.body.innerHTML = `
  
`;

// Definition of items
interface Item {
  name: string;
  cost: number;
  rate: number;
  count: number;
  button?: HTMLButtonElement;
}

const items: Item[] = [
  { name: "A", cost: 10, rate: 0.1, count: 0 },
  { name: "B", cost: 100, rate: 2.0, count: 0 },
  { name: "C", cost: 1000, rate: 50, count: 0 },
];

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

// Item buttons setup
items.forEach((item) => {
  const btn = document.createElement("button");
  item.button = btn;
  btn.textContent =
    `Buy ${item.name} (+${item.rate}/sec) — Cost: ${item.cost} Cringe 💀`;
  btn.disabled = true;
  document.body.appendChild(btn);

  btn.addEventListener("click", () => {
    if (counter >= item.cost) {
      counter -= item.cost;
      item.count += 1;

      item.cost *= 1.15;

      updateButtonUI();
    }
  });
});

// Total growth rate calculation
function getTotalGrowthRate() {
  return items.reduce((sum, u) => sum + u.count * u.rate, 0);
}

// Continuous growth setup
let lastTime: number = performance.now();

function animate(currentTime: number) {
  const deltaTime = (currentTime - lastTime) / 1000;

  counter += getTotalGrowthRate() * deltaTime;

  lastTime = currentTime;

  updateButtonUI();

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

// Button UI updater
function updateButtonUI() {
  const totalRate = getTotalGrowthRate();
  counterDiv.textContent = `${counter.toFixed(2)} cringe 💀 | Rate: ${
    totalRate.toFixed(2)
  }/sec`;

  items.forEach((u) => {
    if (u.button) {
      u.button.disabled = counter < u.cost;
      u.button.textContent = `Buy ${u.name} (+${u.rate}/sec) — Cost: ${
        u.cost.toFixed(2)
      } Cringe 💀`;
    }
  });

  const countsText = items.map((u) => `${u.name}: ${u.count}`).join(" | ");
  counterDiv.textContent += ` | Items: ${countsText}`;
}

import "./style.css";

let currentCringe: number = 0;

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
  { name: "Facebook memes", cost: 10, rate: 0.1, count: 0 },
  { name: "67 memes", cost: 100, rate: 2.0, count: 0 },
  { name: "Ultimate Cringe Compilation video", cost: 1000, rate: 50, count: 0 },
];

// Creation of cringe div element
const cringeDiv = document.createElement("div");
cringeDiv.id = "cringeDisplay";
cringeDiv.textContent = "0.00 cringe 💀";
document.body.appendChild(cringeDiv);

// Main cringe button
const button = document.createElement("button");
button.id = "increment";
button.textContent = "💀 Express cringe!";
button.style.fontSize = "1.5em";
button.style.padding = "10px 20px";
document.body.appendChild(button);

button.addEventListener("click", () => {
  // cringe incremented by 1
  currentCringe += 1;
  // update cringe text
  updateCringeUI();
});

// Item buttons setup
items.forEach((item) => {
  const btn = document.createElement("button");
  item.button = btn;
  btn.textContent =
    `Buy ${item.name} (+${item.rate}/sec) — Cost: ${item.cost} Cringe 💀`;
  btn.disabled = true;
  btn.style.display = "block";
  btn.style.marginTop = "5px";
  document.body.appendChild(btn);

  btn.addEventListener("click", () => {
    if (currentCringe >= item.cost) {
      currentCringe -= item.cost;
      item.count += 1;

      item.cost *= 1.15;

      updateCringeUI();
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

  currentCringe += getTotalGrowthRate() * deltaTime;

  lastTime = currentTime;

  updateCringeUI();

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

// Button UI updater
function updateCringeUI() {
  const totalRate = getTotalGrowthRate();
  cringeDiv.textContent = `${currentCringe.toFixed(2)} cringe 💀 | Rate: ${
    totalRate.toFixed(2)
  }/sec`;

  items.forEach((u) => {
    if (u.button) {
      u.button.disabled = currentCringe < u.cost;
      u.button.textContent = `Buy ${u.name} (+${u.rate}/sec) — Cost: ${
        u.cost.toFixed(2)
      } Cringe 💀`;
    }
  });

  const countsText = items.map((u) => `${u.name}: ${u.count}`).join(" | ");
  cringeDiv.textContent += ` | Items: ${countsText}`;
}

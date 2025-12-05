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
  description: string;
  button?: HTMLButtonElement;
}

const availableItems: Item[] = [
  {
    name: "Facebook memes",
    cost: 10,
    rate: 0.1,
    count: 0,
    description: "Classic cringe memes from Facebook to farm cringe.",
  },
  {
    name: "67 memes",
    cost: 100,
    rate: 2.0,
    count: 0,
    description:
      "A viral collection of cringeworthy 67 memes to induce cringe.",
  },
  {
    name: "Ultimate Cringe Compilation video",
    cost: 1000,
    rate: 50,
    count: 0,
    description:
      "Try not to cringe challenge - impossible. This one is extra cringe.",
  },
  {
    name: "TikTok fails",
    cost: 5000,
    rate: 200,
    count: 0,
    description:
      "Don't you just hate it when things don't go right? Cringe at other's mistakes.",
  },
  {
    name: "Awkward Zoom prank calls",
    cost: 20000,
    rate: 1000,
    count: 0,
    description: "Endless cringe from virtual gatherings gone wrong.",
  },
];

// Creation of cringe div element
const cringeDiv = document.createElement("div");
cringeDiv.id = "cringeDisplay";
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
availableItems.forEach((item) => {
  const btn = document.createElement("button");
  item.button = btn;
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
  return availableItems.reduce((sum, item) => sum + item.count * item.rate, 0);
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

  availableItems.forEach((item) => {
    if (item.button) {
      item.button.disabled = currentCringe < item.cost;
      item.button.textContent = `Buy ${item.name} (+${item.rate}/sec) — Cost: ${
        item.cost.toFixed(2)
      } Cringe 💀\n${item.description}`;
    }
  });

  const itemsText = availableItems.map((item) => `${item.name}: ${item.count}`)
    .join(" | ");
  cringeDiv.textContent = `${currentCringe.toFixed(2)} cringe 💀 | Rate: ${
    totalRate.toFixed(2)
  }/sec | Items: ${itemsText}`;
}

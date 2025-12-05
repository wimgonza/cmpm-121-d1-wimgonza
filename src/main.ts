import "./style.css";

let counter: number = 0;

document.body.innerHTML = `
  
`;

// Creation of counter div element
const counterDiv = document.createElement("div");
counterDiv.id = "counter";
counterDiv.textContent = "0 cringe 💀";
document.body.appendChild(counterDiv);

// Add click handler
const button = document.createElement("button");
button.id = "increment";
button.textContent = "💀";
document.body.appendChild(button);

// Counter element
const counterElement = document.getElementById("counter")!;

button.addEventListener("click", () => {
  // console.log("I have these thingies:", button, counterElement, counter);
  // counter incremented by 1
  counter++;
  // update counter text
  counterDiv.textContent = `${counter} cringe 💀`;
});

import exampleIconUrl from "./noun-paperclip-7598668-00449F.png";
import "./style.css";

let counter: number = 0;

document.body.innerHTML = `
  <p>Example image asset: <img src="${exampleIconUrl}" class="icon" /></p>
  <p>Counter: <span id="counter">0</span></p>
`;

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
  counterElement.textContent = counter.toString();
});

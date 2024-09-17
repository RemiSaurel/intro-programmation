// main.ts
import "./style.css";
import { Rectangle } from "./shape/Rectangle";
import { Circle } from "./shape/Circle";

// Create a container inside #app
const container = document.createElement("div");
container.id = "container";
document.getElementById("app")!.appendChild(container);

// btn-create is a button in the HTML file
const btnCreate = document.getElementById("btn-create") as HTMLButtonElement;
btnCreate.addEventListener("click", () => {
  const shapeType = (
    document.getElementById("shapeSelect") as HTMLSelectElement
  ).value;

  let shape;
  if (shapeType === "rectangle") {
    shape = new Rectangle("blue", 150, 100);
  } else if (shapeType === "circle") {
    shape = new Circle("green", 100);
  }

  if (shape) {
    shape?.draw(container); // Draw the selected shape in the container
  } else {
    alert("Sélectionnez une forme");
  }
});

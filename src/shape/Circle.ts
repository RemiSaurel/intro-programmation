// Circle.ts
import { Shape } from "./Shape";

export class Circle extends Shape {
  constructor(color: string, diameter: number = 100) {
    super(color, diameter, diameter); // For a circle, width and height are the same
  }

  public draw(parentElement: HTMLElement): void {
    const circle = document.createElement("div");
    circle.style.width = `${this.getWidth()}px`;
    circle.style.height = `${this.getHeight()}px`;
    circle.style.backgroundColor = this.getColor();
    circle.style.border = "1px solid black";
    circle.style.borderRadius = "50%";
    circle.style.display = "inline-block";
    circle.style.margin = "10px";

    // Append the circle to the parent container
    parentElement.appendChild(circle);
  }
}

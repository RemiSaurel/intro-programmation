// Rectangle.ts
import { Shape } from "./Shape";

export class Rectangle extends Shape {
  constructor(color: string, width: number = 100, height: number = 100) {
    super(color, width, height);
  }

  public draw(parentElement: HTMLElement): void {
    const rectangle = document.createElement("div");
    rectangle.style.width = `${this.getWidth()}px`;
    rectangle.style.height = `${this.getHeight()}px`;
    rectangle.style.backgroundColor = this.getColor();
    rectangle.style.border = "1px solid black";
    rectangle.style.display = "inline-block";
    rectangle.style.margin = "10px";

    // Append the rectangle to the parent container
    parentElement.appendChild(rectangle);
  }
}

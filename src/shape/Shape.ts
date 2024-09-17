// Shape.ts
export abstract class Shape {
  private color: string;
  private width: number;
  private height: number;

  constructor(color: string, width: number = 100, height: number = 100) {
    this.color = color;
    this.width = width;
    this.height = height;
  }

  public getColor(): string {
    return this.color;
  }

  public setColor(color: string): void {
    this.color = color;
  }

  public getWidth(): number {
    return this.width;
  }

  public setWidth(width: number): void {
    if (width < 0) {
      throw new Error("Width must be greater than 0");
    }
    this.width = width;
  }

  public getHeight(): number {
    return this.height;
  }

  public setHeight(height: number): void {
    if (height < 0) {
      throw new Error("Height must be greater than 0");
    }
    this.height = height;
  }

  // Abstract method to be implemented by subclasses
  public abstract draw(parentElement: HTMLElement): void;
}

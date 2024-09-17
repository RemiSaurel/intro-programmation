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
    this.width = width;
  }

  public getHeight(): number {
    return this.height;
  }

  public setHeight(height: number): void {
    this.height = height;
  }

  // Abstract method to be implemented by subclasses
  public abstract draw(parentElement: HTMLElement): void;
}

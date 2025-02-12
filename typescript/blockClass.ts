// TypeScript
class BlockClass {
  width: number;
  length: number;
  height: number;

  constructor(data: number[]) {
    this.width = data[0];
    this.length = data[1];
    this.height = data[2];
  }

  getWidth(): number {
    return this.width;
  }

  getLength(): number {
    return this.length;
  }

  getHeight(): number {
    return this.height;
  }

  getVolume(): number {
    return this.width * this.length * this.height;
  }

  getSurfaceArea(): number {
    return 2 * (this.length * this.width + this.height * this.width + this.length * this.height);
  }
}

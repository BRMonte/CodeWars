class Sudoku {
  constructor(data) {
    this.data = data;
    this.size = data.length;
    this.subSize = Math.sqrt(this.size);
  }

  getAllRows() {
    return this.data;
  }

  getAllColumns() {
    return Array.from({ length: this.size }, (_, col) =>
      this.data.map(row => row[col])
    );
  }

  getAllAreas() {
    let areas = Array.from({ length: this.size }, () => []);
    for (let row = 0; row < this.size; row++) {
      for (let col = 0; col < this.size; col++) {
        let areaIndex = Math.floor(row / this.subSize) * this.subSize + Math.floor(col / this.subSize);
        areas[areaIndex].push(this.data[row][col]);
      }
    }
    return areas;
  }

  isValidSudokuStructure(structure) {
    return structure.slice().sort((a, b) => a - b).join() === Array.from({ length: this.size }, (_, i) => i + 1).join();
  }

  valid() {
    if (!this.data.every(row => row.length === this.size)) return false;

    return [...this.getAllRows(), ...this.getAllColumns(), ...this.getAllAreas()].every(this.isValidSudokuStructure.bind(this));
  }
}
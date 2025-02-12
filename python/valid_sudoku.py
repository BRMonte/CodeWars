import math

class Sudoku:
    def __init__(self, data):
        self.data = data
        self.size = len(data)
        self.sub_size = int(math.sqrt(self.size))

    def get_all_rows(self):
        return self.data

    def get_all_columns(self):
        return [[self.data[row][col] for row in range(self.size)] for col in range(self.size)]

    def get_all_areas(self):
        areas = [[] for _ in range(self.size)]
        for row in range(self.size):
            for col in range(self.size):
                area_index = (row // self.sub_size) * self.sub_size + (col // self.sub_size)
                areas[area_index].append(self.data[row][col])
        return areas

    def is_valid_sudoku_structure(self, structure):
        return sorted(structure) == list(range(1, self.size + 1))

    def is_valid(self):
        if not all(len(row) == self.size for row in self.data):
            return False

        for section in (self.get_all_rows(), self.get_all_columns(), self.get_all_areas()):
            if not all(self.is_valid_sudoku_structure(group) for group in section):
                return False
                
        return True

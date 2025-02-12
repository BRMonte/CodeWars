class Sudoku
  def initialize(data)
    @data = data
    @size = @data.size
    @sub_area_size = Math.sqrt(@size).to_i
  end

  def get_all_rows
    @data
  end

  def get_all_columns
    (0...@size).map { |i| @data.map { |row| row[i] } }
  end

  def get_all_areas
    areas = Array.new(@size) { [] }
    
    (0...@size).each do |row|
      (0...@size).each do |col|
        area_index = (row / @sub_area_size) * @sub_area_size + (col / @sub_area_size)
        areas[area_index] << @data[row][col]
      end
    end
    
    areas
  end

  def is_valid_sudoku_structure?(structure)
    structure.sort == (1..@size).to_a
  end

  def valid?
    return false unless @size.positive? && @sub_area_size**2 == @size
    return false unless @data.all? { |row| row.size == @size }

    rows    = get_all_rows
    columns = get_all_columns
    areas   = get_all_areas

    rows.all? { |r| is_valid_sudoku_structure?(r) } &&
      columns.all? { |c| is_valid_sudoku_structure?(c) } &&
      areas.all? { |a| is_valid_sudoku_structure?(a) }
  end
end
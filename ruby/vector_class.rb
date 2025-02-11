# https://www.codewars.com/kata/532a69ee484b0e27120000b6/solutions/python

class Vector
  attr_reader :x, :y, :z

  def initialize(*args)
    if args.length == 1 && args.first.is_a?(Array)
      @x, @y, @z = args.first
    else
      @x, @y, @z = args
    end
  end

  def +(other)
    Vector.new(@x + other.x, @y + other.y, @z + other.z)
  end

  def -(other)
    Vector.new(@x - other.x, @y - other.y, @z - other.z)
  end

  def ==(other)
    @x == other.x && @y == other.y && @z == other.z
  end

  def cross(other)
    Vector.new(
      @y * other.z - @z * other.y,
      @z * other.x - @x * other.z,
      @x * other.y - @y * other.x
    )
  end

  def dot(other)
    @x * other.x + @y * other.y + @z * other.z
  end

  def to_a
    [@x, @y, @z]
  end

  def to_s
    "<#{@x}, #{@y}, #{@z}>"
  end

  def magnitude
    Math.sqrt(@x**2 + @y**2 + @z**2)
  end
end
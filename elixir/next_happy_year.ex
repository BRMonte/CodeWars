defmodule NextHappyYear do
  def next_happy_year(year) do
    next_happy_year_helper(year + 1)
  end

  defp next_happy_year_helper(year) do
    if length(Enum.uniq(String.graphemes(Integer.to_string(year)))) == 4 do
      year
    else
      next_happy_year_helper(year + 1)
    end
  end
end

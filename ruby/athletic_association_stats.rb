def time_to_seconds(time)
  times = time.split('|')
  hour_to_sec = 3600 * times.first.to_i
  min_to_sec = 60 * times[1].to_i
  seconds = times.last.to_i
  hour_to_sec + min_to_sec + seconds
end

def format_time(seconds)
  h = seconds / 3600
  m = (seconds % 3600) / 60
  s = seconds % 60
  sprintf("%02d|%02d|%02d", h, m, s)
end

def median_time(times)
  sorted = times.sort
  n = sorted.size
  mid = n / 2
  n.odd? ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2.0
end

def stat(results)
  entries = results.split(/,\s*/)
  times_in_seconds = entries.map { |entry| time_to_seconds(entry) }

  range_seconds = times_in_seconds.max - times_in_seconds.min

  avg_seconds = times_in_seconds.sum.to_f / times_in_seconds.size
  median_seconds = median_time(times_in_seconds)

  range_str = format_time(range_seconds)
  average_str = format_time(avg_seconds.to_i)
  median_str = format_time(median_seconds.to_i)

  "Range: #{range_str} Average: #{average_str} Median: #{median_str}"
end
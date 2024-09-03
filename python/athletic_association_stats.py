def time_to_seconds(time):
    times = time.split('|')
    hour_to_sec = 3600 * int(times[0])
    min_to_sec = 60 * int(times[1])
    seconds = int(times[2])
    return hour_to_sec + min_to_sec + seconds

def format_time(seconds):
    h = seconds // 3600
    m = (seconds % 3600) // 60
    s = seconds % 60
    return f"{h:02d}|{m:02d}|{s:02d}"

def median_time(times):
    sorted_times = sorted(times)
    n = len(sorted_times)
    mid = n // 2
    if n % 2 == 1:
        return sorted_times[mid]
    else:
        return (sorted_times[mid - 1] + sorted_times[mid]) / 2.0

def stat(results):
    if results == '':
        return ''
    
    entries = results.split(', ')
    times_in_seconds = [time_to_seconds(entry) for entry in entries]

    range_seconds = max(times_in_seconds) - min(times_in_seconds)

    avg_seconds = sum(times_in_seconds) / len(times_in_seconds)
    median_seconds = median_time(times_in_seconds)

    range_str = format_time(range_seconds)
    average_str = format_time(int(avg_seconds))
    median_str = format_time(int(median_seconds))

    return f"Range: {range_str} Average: {average_str} Median: {median_str}"
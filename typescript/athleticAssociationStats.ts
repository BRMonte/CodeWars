export const timeToSeconds = (time: string): number | null => {
    const times = time.split('|');
    if (times.length !== 3) return null;
    const hourToSec = 3600 * parseInt(times[0], 10);
    const minToSec = 60 * parseInt(times[1], 10);
    const seconds = parseInt(times[2], 10);
    return hourToSec + minToSec + seconds;
}

export const formatTime = (seconds: number): string => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}|${m.toString().padStart(2, '0')}|${s.toString().padStart(2, '0')}`;
}

export const medianTime = (times: number[]): number => {
    const sortedTimes = [...times].sort((a, b) => a - b);
    const n = sortedTimes.length;
    const mid = Math.floor(n / 2);
    if (n % 2 === 1) {
        return sortedTimes[mid];
    } else {
        return (sortedTimes[mid - 1] + sortedTimes[mid]) / 2;
    }
}

export const stat = (results: string): string => {
    if (results.trim() === '') return '';

    const entries = results.split(', ').filter(entry => entry.trim() !== '');
    const timesInSeconds = entries
        .map(entry => timeToSeconds(entry))
        .filter((seconds): seconds is number => seconds !== null);

    if (timesInSeconds.length === 0) {
        return 'Range: 00|00|00 Average: 00|00|00 Median: 00|00|00';
    }

    const rangeSeconds = Math.max(...timesInSeconds) - Math.min(...timesInSeconds);
    const avgSeconds = timesInSeconds.reduce((a, b) => a + b, 0) / timesInSeconds.length;
    const medianSeconds = medianTime(timesInSeconds);

    const rangeStr = formatTime(rangeSeconds);
    const averageStr = formatTime(Math.floor(avgSeconds));
    const medianStr = formatTime(Math.floor(medianSeconds));

    return `Range: ${rangeStr} Average: ${averageStr} Median: ${medianStr}`;
}

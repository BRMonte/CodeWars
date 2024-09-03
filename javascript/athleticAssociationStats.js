function timeToSeconds(time) {
    const times = time.split('|');
    if (times.length !== 3) return null;
    const hourToSec = 3600 * parseInt(times[0], 10);
    const minToSec = 60 * parseInt(times[1], 10);
    const seconds = parseInt(times[2], 10);
    return hourToSec + minToSec + seconds;
}

function formatTime(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${String(h).padStart(2, '0')}|${String(m).padStart(2, '0')}|${String(s).padStart(2, '0')}`;
}

function medianTime(times) {
    times.sort((a, b) => a - b);
    const n = times.length;
    const mid = Math.floor(n / 2);
    if (n % 2 === 1) {
        return times[mid];
    } else {
        return (times[mid - 1] + times[mid]) / 2;
    }
}

function stat(results) {
    if (results === '') return '';

    const entries = results.split(', ').filter(entry => entry.trim() !== '');
    const timesInSeconds = entries.map(entry => timeToSeconds(entry)).filter(seconds => seconds !== null);

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
function cuckooClock(initialTime, totalChimes) {
    let [hh, mm] = initialTime.split(':').map(Number);
    let countOfChimes = 0;

    while (countOfChimes < totalChimes) {
        if (mm === 0) {
            countOfChimes += hh;
        }
        if (mm === 15) {
            countOfChimes += 1;
        }
        if (mm === 30) {
            countOfChimes += 1;
        }
        if (mm === 45) {
            countOfChimes += 1;
        }

        if (countOfChimes >= totalChimes) {
            return `${hh.toString().padStart(2, '0')}:${mm.toString().padStart(2, '0')}`;
        }

        mm += 1;
        if (mm === 60) {
            mm = 0;
            hh += 1;
            if (hh === 13) {
                hh = 1;
            }
        }
    }

    return `${hh.toString().padStart(2, '0')}:${mm.toString().padStart(2, '0')}`;
}

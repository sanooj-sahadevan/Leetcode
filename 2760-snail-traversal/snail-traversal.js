/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function (rowsCount, colsCount) {
    if (rowsCount * colsCount !== this.length) return [];

    let output = Array.from({ length: rowsCount }, () =>
        Array(colsCount).fill(0)
    );
    let traverse = -1;
    let currentIndex = [0, -1];
    for (let i = 0; i < this.length; i++) {
        if (i % rowsCount === 0) {
            currentIndex[1] += 1;
            traverse *= -1;
        } else {
            currentIndex[0] += traverse;
        }
        output[currentIndex[0]][currentIndex[1]] = this[i];
    }
    return output;




}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {

    const triangle = [];

    for (let n = 0; n < rowIndex + 1; n++) {
        const row = [1];

        for (let k = 1; k < n; k++) {
            row[k] = triangle[n - 1][k - 1] + triangle[n - 1][k];
        }

        if (n > 0) row.push(1);
        triangle.push(row);
    }

    console.log(triangle[triangle.length - 1]);

    console.log(triangle);
    return triangle[triangle.length - 1]

};
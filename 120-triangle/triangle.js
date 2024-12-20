/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    for (let i = triangle.length - 2; i >= 0; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]);
        }
    }
    return triangle[0][0]
    console.log(triangle[0][0]);
    // let x = [];
    // for (let i = 0; i < triangle.length; i++) {
    //   x.push(Math.min(...triangle[i]));
    // }
    // console.log(x);

    // let res  = x.reduce((acc, curr) => acc + curr, 0);
    // console.log(res);

};
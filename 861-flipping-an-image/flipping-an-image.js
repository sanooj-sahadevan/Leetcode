/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
    let x = 0;
    for (let i = 0; i < image.length; i++) {
        image[i].reverse();
    }
    console.log(image);

    for (let i = 0; i < image.length; i++) {
        for (let j = 0; j < image[i].length; j++) {
            image[i][j] = image[i][j] === 0 ? 1 : 0;
        }
    }
    return image
    console.log(image);

};
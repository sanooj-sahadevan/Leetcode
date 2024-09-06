/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
    let a = 0; 
    let b = 0; 

    for (let i = 0; i < moves.length; i++) {
        if (moves[i] === "U") {
            b += 1; 
        }
        if (moves[i] === "D") {
            b -= 1; 
        }
        if (moves[i] === "L") {
            a -= 1; 
        }
        if (moves[i] === "R") {
            a += 1; 
        }
    }

    return a === 0 && b === 0;
};


/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {

    let results = [];
    let firstObj = {};

    for (let i = 0; i < words[0].length; i++) {
        if (firstObj[words[0][i]] === undefined) {
            firstObj[words[0][i]] = 1
        } else {
            firstObj[words[0][i]] += 1
        }
    }

    for (let i = 1; i < words.length; i++) {
        let obj = {};
        for (let j = 0; j < words[i].length; j++) {
            if (obj[words[i][j]] === undefined) {
                obj[words[i][j]] = 1
            } else {
                obj[words[i][j]] += 1
            }
        }

        for (let key in firstObj) {
            if (key in obj) {
                firstObj[key] = Math.min(obj[key], firstObj[key])
            } else {
                delete firstObj[key]
            }
        }
    }

    console.log(firstObj)



    for (let [key] in firstObj) {
        while (firstObj[key] > 0) {
            results.push(key)
            firstObj[key]--
        }
    }

    return results

};
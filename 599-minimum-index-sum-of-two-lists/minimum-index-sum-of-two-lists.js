/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
    let res = [];
    for (i = 0; i < list1.length; i++) {
        for (j = 0; j < list2.length; j++) {
            if (list1[i] === list2[j]) {
                res.push(i + j);
            }
        }
    }

    let min = Math.min(...res);
    let result = []
    for (i = 0; i < list1.length; i++) {
        for (j = 0; j < list2.length; j++) {
            if (list1[i] === list2[j] && i + j === min) {
                result.push(list1[i])

            }
        }
    }

return result

};
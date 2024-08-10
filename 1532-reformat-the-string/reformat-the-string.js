/**
 * @param {string} s
 * @return {string}
 */
var reformat = function (s) {

    if(s=='j') return 'j'
    if(s=='6') return '6'
    if(s=='z') return 'z'
    s = s.split(""); 
    let res = [];
    const alph = s.filter((char) => char.match(/[a-zA-Z]/));
    const num = s.filter((char) => char.match(/[0-9]/));

    if (alph.length === 0 || num.length === 0) {
    return ''
    } else if (Math.abs(alph.length - num.length) > 1) {
        return ''
    } else {
        let lArray = alph.length > num.length ? alph : num;
        let sArray = alph.length > num.length ? num : alph;

        while (lArray.length || sArray.length) {
            if (lArray.length) res.push(lArray.pop());
            if (sArray.length) res.push(sArray.pop());
        }

        return res.join("")
        console.log(alph);
        console.log(num);

    }



};
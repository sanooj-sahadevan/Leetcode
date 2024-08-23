/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function (day, month, year) {

    let obj = { Sun: 'Sunday', Mon: 'Monday', Tue: "Tuesday", Wed: 'Wednesday', Thu: 'Thursday', Fri: "Friday", Sat: "Saturday" }
    let date = new Date(`${year}-${month}-${day}`);
   let dayAbbreviation = date.toDateString().substring(0, 3);
    return obj[dayAbbreviation];
};
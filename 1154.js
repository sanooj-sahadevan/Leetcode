// let date = "2019-01-09";
// Output: 9
// Explanation: Given date is the 9th day of the year in 2019.
// Example 2:

let date = "2019-02-10";
// Output: 41
date = date.split("-");
let x = 0,
  num = 0;
year = 0;
let Months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let lpYear = [
  1904, 1908, 1912, 1916, 1920, 1924, 1928, 1932, 1936, 1940, 1944, 1948, 1952,
  1956, 1960, 1964, 1968, 1972, 1976, 1980, 1984, 1988, 1992, 1996, 2000, 2004,
  2008, 2012, 2016, 2020, 2024, 2028, 2032, 2036, 2040, 2044,
];

for (i = 0; i < date.length; i++) {
  if (i == 0) {
    year = Number(date[i]);
    if (lpYear.includes(year)) {
      Months[1] = 29;
    }
  }

  if (i == 1) {
    num = Number(date[i]);
    if (num > 1) {
      for (let j = 0; j < num - 1; j++) {
        x += Months[j];
      }
    }
  }

  if (i == 2) {
    x += Number(date[i]);
  }
}

console.log(x);

let num = 9669;
// Output: 9969
// Explanation:
// Changing the first digit results in 6669.
// Changing the second digit results in 9969.
// Changing the third digit results in 9699.
// Changing the fourth digit results in 9666.
// The maximum number is 9969.

num = num.toString().split("");
let res = [];

for (let j = 0; j < num.length; j++) {
  let original = num[j];

  if (num[j] == "9") {
    num[j] = "6";
  } else if (num[j] == "6") {
    num[j] = "9";
  }

  res.push(num.join(""));
  num[j] = original;
}

console.log(res);

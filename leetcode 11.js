const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

let maxArea = 0;
let y = 0,
  x = 0;
let area = 0;
for (i = 0; i < height.length; i++) {
  for (j = 0; j < height.length; j++) {
    x = Math.min(height[i], height[j]);
    y = i - j;
    area = x * y;
    maxArea = Math.max(maxArea, area);
  }
}

console.log(maxArea);
//time limit eceeded
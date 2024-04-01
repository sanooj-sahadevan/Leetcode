var res = 3;
if (n == 1) {
  return true;
}
while (n > res) {
  res *= 3;
}
if (res == n) {
  return true;
} else {
  return false;
}





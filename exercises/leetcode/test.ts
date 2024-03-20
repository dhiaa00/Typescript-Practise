function isPalindrome(x: number): boolean {
  let numstr: string = x.toString();
  let j: number = numstr.length;
  if (x < 0) {
    return false;
  } else {
    let i: number = 0;
    while (i < j - 1) {
      if (numstr[j - 1] != numstr[i]) {
        return false;
      }
      j--;
      i++;
    }
    return true;
  }
}
console.log(isPalindrome(121));

function checkPalindrome(str) {
  // str = str.toLowerCase();
  // let first = str.split(' ').join('')
  // let second = first.split('').reverse().join('')
  // console.log(first)
  // console.log(second);

  let tempStr = str.match(/[a-z]+/ig).join('').toLowerCase()
  
  let second = tempStr.split('').reverse().join('')
  // console.log(second);
  // console.log(tempStr);
  

  // return first === second;
  return tempStr === second;
}

console.log(checkPalindrome("Was it a car or a cat I saw"));
console.log(checkPalindrome("Red -rum-, sir,-is-murder"));
console.log(checkPalindrome("I got up early this morning"));
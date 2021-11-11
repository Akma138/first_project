function countdownScript(number) {
  let script = '';

  while(number > 0) {
    script += `${number} ... \n`;
    number -= 1;
  }

  script += 'Blast off!';
  return script;
}
console.log(countdownScript(10)); 


function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

console.log( factorial(5) );

module.exports = {
  countdownScript,
  factorial
}



var arrowFunction = () => {
  return 'Arrow functions are great!';
};

var arrowFunction = () => {
  console.log('I was called!');
};

var regularFunction = function() {
  console.log('I was called, too!');
};

var arrowFunction = (arg1, arg2) => {
  console.log(arg1, arg2);
};
 
arrowFunction('Hey,', 'you!');

[1, 2, 3, 4].map(n => n * n).reduce((sum, n) => (sum + n), 0);
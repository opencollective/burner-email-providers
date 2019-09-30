
const { isEmailBurner } = require('.');
const assert = require('assert');

assert(isEmailBurner('test@gmail.com') === false, 'test@gmail.com should be valid');
assert(isEmailBurner('test@10minutemail.com') === true, 'test@10minutemail.com should be invalid');

console.log('all good');
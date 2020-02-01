const userName = 'max';
userName ? console.log('true') :
console.log('false');

function helloUser(userName) {
    return (userName ? console.log(`Hello, ${userName}`) : console.log(`Hello!`)) 
  }

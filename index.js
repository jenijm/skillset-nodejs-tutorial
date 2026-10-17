const greeting = 'Hello from Node.js!';

function getGreeting() {
  return greeting;
}

if (require.main === module) {
  console.log(getGreeting());
}

module.exports = { getGreeting };

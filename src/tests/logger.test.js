const {logger} = require('../components/logger');

console.log("logger type: " + typeof(logger));

console.log("hello Mark");

describe("Checking out Winston logger", () => {
  test("run logger", () => {
    const myTest = "My Man";
    console.log({
      level: 'info',
      message: 'Hello from distributed log files!'
    });

    console.log('Hello again distributed logs, %s',"Mark");
    console.log(`Hello yet again! Lets try this! ${myTest}, %s`, "Mark")
  })
})


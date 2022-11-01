console.group("From the util.js module");

export function sayHello() {
  console.log("Hello");
}

export function doMath(x, y) {
  return x + y;
}

// we're affecting our "global" scope here..
// will this be accessible?
window.thingy = function () {
  console.log("mutated window");
};

console.groupEnd();
function makeProm() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('resolved');
    }, 10000);
  });
}

console.log('Child Module, I use await');

const data = await makeProm();

console.log('Child Module, Resolved to', data);

export { makeProm }
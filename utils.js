const random = (length) => {
  return  Math.floor(Math.random() * length);
}

const sleep = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, random(time) * 1000);
  })
}

module.exports = {
  random,
  sleep,
}

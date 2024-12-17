function throttle(fun, delay) {
  let shouldCall = true;
  return function (...args) {
    if (!shouldCall) return;

    fun.apply(this, args);
    shouldCall = false;
    setTimeout(() => {
      shouldCall = true;
    }, delay);
  };
}

const throttledFunction = throttle(() => {
  console.log("Throttled function executed!");
}, 1000);

throttledFunction(); // Executes immediately
throttledFunction(); // Ignored if called within 1 second

function debounce(fun, delay) {
  let timeOut;
  return function (...args) {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      fun.apply(this, args);
    }, delay);
  };
}

const debouncedFunction = debounce(() => {
  console.log("Debounced function executed!");
}, 1000);

debouncedFunction(); // Will only execute after 1 second, unless interrupted
debouncedFunction(); // Resets the timer

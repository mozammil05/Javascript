function asyncParallel(tasks, callback) {
  // store the result
  const results = [];

  // track the task executed
  let tasksCompleted = 0;

  // run each task
  tasks.forEach((asyncTask) => {
    // invoke the async task
    // it can be a promise as well
    // for a promise you can chain it with then
    asyncTask((value) => {
      // store the output of the task
      results.push(value);

      // increment the tracker
      tasksCompleted++;

      // if all tasks are executed
      // invoke the callback
      if (tasksCompleted >= tasks.length) {
        callback(results);
      }
    });
  });
}
function createAsyncTask(value) {
  return function (callback) {
    setTimeout(() => {
      callback(value);
    }, value * 1000);
  };
}

// Input:
const taskList = [
  createAsyncTask(1),
  createAsyncTask(6),
  createAsyncTask(7),
  createAsyncTask(7),
  createAsyncTask(9),
  createAsyncTask(9),
];

asyncParallel(taskList, (result) => {
  console.log("results", result);
});

// Output:
// "results"[(1, 6, 7, 7, 9, 9)]; // [object Array] (6)

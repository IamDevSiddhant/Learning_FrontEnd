const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("async task completed");
    //connecting .then() & resolve on below line
    resolve();
  }, 1000);
});
promiseOne.then(() => console.log("task completed"));

// approach 2:- to write promise
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async taks 2");
    //connecting .then() & resolve on below line
    resolve();
  }, 1000);
}).then(() => {
  console.log(`task 2 completed now`);
});

// approach 3:- to write promise
let userName = "";
const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ userName: `${userName}`, pin: "411038" });
  }, 1000);
});

promiseThree.then((user) => {
  user.userName = "xyz";
  console.log(user);
});

// approach 4:- to write promise

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (error) {
      reject(`Error, Something went wrong`);
    } else {
      resolve({ fName: `${userName}`, pin: "411038" });
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    user.fName = "siddhant";
    return user.fName;
  })
  .then((userName) => console.log(`username is ${userName}`))
  .catch((error) => console.log(`something went wrong : ${error}`))
  .finally(() => console.log(`executed finally block`));

// approach 5:- to write promise
const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (error) {
      reject(`Error, Something went wrong`);
    } else {
      resolve({ fName: `nw`, pin: "411038" });
    }
  }, 500);
});

async function consumePromise() {
  try {
    const response = await promiseFive;

    console.log(`response for async await is : ${JSON.stringify(response)}`);
  } catch (Error) {
    console.log(`Error in async function is ${Error}`);
  }
}
consumePromise();

async function getAllUsers() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("E: ", error);
  }
}

getAllUsers();

fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));

const myObj = {
  1: "java",
  2: "javascript",
  3: "spring boot",
  4: "react js",
  5: "mysql",
  6: "mongodb",
  7: "kafka",
  8: "redis",
};
//print object keys
for (const key in myObj) {
  console.log(key);
}
//print object values
for (const key in myObj) {
  console.log(`key is: ${key} & value is ${myObj[key]} `);
}

const myObj1 = [
  {
    city: "pune",
    state: "mh",
  },
  {
    city: "mumbai",
    state: "mh",
  },
  {
    city: "banglore",
    state: "karnatak",
  },
];

//for each
myObj1.forEach((x) => {
  console.log(x.city, "  ", x.state);
});

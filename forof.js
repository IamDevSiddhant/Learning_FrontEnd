const arr = [1, 2, 3];
for (const iterator of arr) {
  console.log(iterator);
}
const map = new Map();

map.set(1, "siddhant");
map.set(2, "skyler");
map.set(3, "polina");
//key values in map
for (const [key, val] of map) {
  console.log(key, ":--", val);
}

const assertObjectsEqual = require("../assertObjectsEqual");

//TEST CODE
const users = {
  zbxN3: "Zofia Mcdougall",
  Ff3dc: "Anisha Franco",
  AaCf3: "Colin Lam",
  X63ef: "Ozan Robbins",
  RfErt: "Doug Velez",
};

const users2 = {
  zb3f3: "Julia Di Monte",
  Ff3dc: "Anisha Franco",
  AaCf3: "Colin Lam",
  X63ef: "Ozan Robbins",
  RfErt: "Doug Velez",
};
assertObjectsEqual(users, users);
assertObjectsEqual(users, users2);

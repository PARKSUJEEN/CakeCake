const cakes = [
  {
    _id: 1,
    name: "ButterCake",
  },
  {
    _id: 2,
    name: "RollCake",
  },
  {
    _id: 3,
    name: "CheeseCake",
  },
  {
    _id: 4,
    name: "SpongeCake",
  },
  {
    _id: 5,
    name: "MooseCake",
  },
  {
    _id: 6,
    name: "ChiffonCake",
  },
  {
    _id: 7,
    name: "Another",
  },
];

const price = [
  {
    _id: 0,
    name: "Any",
    array: [],
  },
  {
    _id: 1,
    name: "0원 ~ 9,999원",
    array: [0, 9999],
  },
  {
    _id: 2,
    name: "10,000원 ~ 19,999원",
    array: [10000, 19999],
  },
  {
    _id: 3,
    name: "20,000원 ~ 29,999원",
    array: [20000, 29999],
  },
  {
    _id: 4,
    name: "30,000원 ~ 39,999원",
    array: [30000, 39999],
  },
  {
    _id: 5,
    name: "40,000원 이상",
    array: [40000, 99999],
  },
];

export { cakes, price };

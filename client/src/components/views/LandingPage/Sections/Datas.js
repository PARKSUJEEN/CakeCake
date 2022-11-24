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
    name: "$0 ~ 9",
    array: [0, 9],
  },
  {
    _id: 2,
    name: "$10 ~ 19",
    array: [10, 19],
  },
  {
    _id: 3,
    name: "$20 ~ 29",
    array: [20, 29],
  },
  {
    _id: 4,
    name: "$30 ~ 39",
    array: [30, 39],
  },
  {
    _id: 5,
    name: "More $40",
    array: [40, 99999],
  },
];

export { cakes, price };

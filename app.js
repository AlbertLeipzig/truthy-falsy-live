const users = [
  {
    name: 'Anton',
    chocolate: 2,
  },
  {
    name: 'Berta',
    chocolate: '3',
  },
];

// frag Edward nach einem anwendungsorientiertes Beispiel. Wer nutzt isNaN / NaN in echtem Projekten?

let _chocolateUnits = [];
let chocolateUnits;
users.forEach((user) => {
  const _chocolate = parseInt(user.chocolate);
  _chocolateUnits = [..._chocolateUnits, _chocolate];
  const totalChocolate = _chocolateUnits.reduce((a, b) => a + b, 0);
  chocolateUnits = totalChocolate;
});

// console.log(chocolateUnits);

const weekDays = [
  'Monday',
  'Tuesday',
  'Wednessday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

let today = 'asldkjasdlkj';
let task;

if (today === 'Monday') {
  task = 'paint';
} else if (today === 'Tuesday') {
  task = 'play an instrument';
} else if (today === 'Wednessday') {
  task = 'dance';
} else {
  task = 'take a break';
}

// console.log(task);

switch (today) {
  case 'Monday':
    task = 'paint';
    break;
  case 'Tuesday':
  case 'Friday':
    task = 'play an instrument';
    break;
  case 'Wednessday':
    task = 'dance';
    break;
  default:
    task = 'Think';
}

console.log(task);

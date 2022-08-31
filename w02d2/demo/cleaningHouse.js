// Main Thead

const startWashingMachine = () => {

  console.log('Washing Machine Started.');

  setTimeout(() => {
    console.log('Washing Machine Finished.');
  },5000);

};

const startDishwasher = () => {

  console.log('Dishwasher Started.');

  setTimeout(() => {
    console.log('Dishwasher Finished.');
  },8000);

};

const dustShelves = () => {
  console.log('Dusting Shelves.');
};

const mopFloor = () => {
  console.log('Mopping Floor.');
};

// start long running tasks
startDishwasher();
startWashingMachine();
// start other tasks
dustShelves();
mopFloor();

// Main Thread Finished - Event Loop Can Start

//
//     
//     |---------------------------------|-----------------------------------|
//     |                                 |                                   |
//     |                                 |                                   |
//     |         Active Thread           |       Web APIs                    |
//     |                                 |                                   |
//     |                                 |                                   |
//     |                                 |                                   |
//     |                                 |                                   |
//     |                                 |                                   |
//     |---------------------------------|-----------------------------------|
//     |                                 |                                   |
//     |          ------>>               |                                   |
//     |                                 |                                   |
//     |         Event Loop              |      Callback Queue               |
//     |                                 |                                   |
//     |         <<-------               |                                   |
//     |                                 |                                   |
//     |---------------------------------|-----------------------------------|
//
//
              // 'getUp', 3000, walk, intervalReference
const doAction = (name, duration, nextAction, intervalReference) => {
  console.log(`${name} has started with intervalReference = ${intervalReference}.`);
  setTimeout( () => {
    console.log(`${name} has ended.`);
    if (nextAction) {
      nextAction(intervalReference);
    } else {
      clearInterval(intervalReference);
    }
  }, duration );
};

function sleepFor(sleepDuration) {
  const nowObject = new Date();
  console.log("nowObject:",JSON.stringify(nowObject));
  const now = nowObject.getTime();
  while (new Date().getTime() < now + sleepDuration) {
    /* do nothing */
  }
}

// The event loop cannot start until the main thread is finished.

let intervalReference = null;

//
// Look
//
const look = () => {
//  doAction('look', 500, look);

  intervalReference = setInterval( () => {
    doAction('look', 100, null);
  }, 500 );

  return intervalReference;

};

//
// Get Up
//
const getUp = (intervalReference) => {
  doAction('getUp', 3000, walk, intervalReference);
};

//
// Walk
//
const walk = (intervalReference) => {
  doAction('walk', 5000, openTheDoor, intervalReference);
};

//
// openTheDoor
//
const openTheDoor = (intervalReference) => {
  doAction('openTheDoor', 3500, walkThroughTheDoor, intervalReference);
};

//
// walkThroughTheDoor
//
const walkThroughTheDoor = (intervalReference) => {
  doAction('walkThroughTheDoor', 1500, null, intervalReference);
};

console.log('intervalReference', intervalReference);
intervalReference = look();
console.log('intervalReference', intervalReference);

getUp(intervalReference);

// sleepFor(5500);
console.log("I am done being programmed. (This is the end of the 'Main Thread'.)");

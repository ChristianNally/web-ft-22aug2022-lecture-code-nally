const fs = require('fs');

console.log('Starting main thread');

const intervalReference = setInterval(() => {
  process.stdout.write(`.`);
}, 30);

const whenDoneReading = (error, data) => {
  if (error){
    console.log('error',error);
    return;
  }
  clearInterval(intervalReference);
  console.log();
  console.log('file read successfully'); 
  console.log('Data Sample: ', data.slice(0, 50));
};

fs.readFile('large-text-file.txt','utf8', whenDoneReading);

console.log('Ending Main Thread');
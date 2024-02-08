const {format,addDays} = require('date-fns');

function performDateOperation(){
    const currenDate = new Date();
    const futureDate = addDays(currenDate, 5);
    const formattedDate = format(futureDate, 'yyyy-MM-dd');

    console.log(`The date in 5 days will be : ${formattedDate}`);
}

module.exports = performDateOperation ;
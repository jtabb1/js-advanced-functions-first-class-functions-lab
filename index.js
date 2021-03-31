// Code your solution in this file!

const returnFirstTwoDrivers = drivers => drivers.slice(0,2);

const returnLastTwoDrivers = drivers => drivers.slice(drivers.length-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// first version:
// function createFareMultiplier(n) {
//     return function(fare) {
//         return n * fare;
//     }
// }

// second simplified version:
// function createFareMultiplier(n) {
//     return (fare) => n * fare
// }

// third and final simplified version:
const createFareMultiplier = n => fare => n * fare;

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (drivers,select) => select(drivers);


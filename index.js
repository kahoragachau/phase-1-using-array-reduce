const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const accumulator = 0
const totalBatteries = batteryBatches.reduce((previousValue, currentValue) => previousValue + currentValue, accumulator)

console.log(totalBatteries)
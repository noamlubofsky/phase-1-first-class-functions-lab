// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];


function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2)
}

function returnLastTwoDrivers(drivers) {
    return drivers.slice(2, 4)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fare) {
    function fareQuintupler() {return (fare * 5)}
    return fareQuintupler
}

function fareDoubler(fare) {
    const doubler = (fare * 2)
    return doubler
}

function fareTripler(fare) {
    const tripler = (fare * 3)
    return tripler
}

function selectDifferentDrivers(drivers, func) {
    return (func(drivers))
}
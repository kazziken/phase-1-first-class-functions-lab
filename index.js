const returnFirstTwoDrivers = function(arrayDrivers){
    return (arrayDrivers.slice(0,2));
}

const returnLastTwoDrivers = function(arrayDrivers){
    return (arrayDrivers.slice(-2));
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier = function(numberOfTickets){
    return function(fare){
        return  numberOfTickets * fare
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, func){
    return func(arrayOfDrivers);
}
import { FPMClientError } from "./error/FPMClientError";
import { ClimateServiceClient } from "./lib/climateservice/ClimateServiceClient";
import { MockHTTPClient } from "./lib/httpclient/impl/MockHTTPClient";
import { flightMockData } from "./mockdata/flightMockData"
import { Flight, TravelClass } from "./model/Flight"

// every arrow function can be defined and it's reference can be stored in a named constant (or variable [let])
// here, the types of arguments must be specified (please don't use any - it renders the use of TypeScript meaningless)
const makeUppercase = (someString: string) => someString.toUpperCase()

const printAllTheKeysAndValuesOfAnObject = (flight: Flight) => {
    let key: keyof Flight;

    for (key in flight) {
        console.log('key:', key, 'value:', flight[key])
    }
}

const switchOverFlightAndPrintTheFlightClass = (flight: Flight) => {
    switch(flight.travelClass) {
        case TravelClass.BUSINESS:
            //console.log(`"${makeUppercase(TravelClass.BUSINESS)}" flight found`, flight)
            printAllTheKeysAndValuesOfAnObject(flight)
            break
        case TravelClass.ECONOMY:
            //console.log('economy flight found', flight)
            printAllTheKeysAndValuesOfAnObject(flight)
            break;
    }
}

// === forEach loops
// the types of arguments of "in-place" declared function can be inferred directly
// we don't need to name the type Flight here, but it can be done to be more explicit 

const walkOverFlightDataUsingForEachMethod = () => {
    flightMockData.forEach(flight => {
        switchOverFlightAndPrintTheFlightClass(flight)
    })
}

// === classic for loop
// allows to implement special looping conditions efficiently (odd/even loops etc. pp)
// has the danger to run into harder to find issues
const walkOverFlightDataUsingStandardForLoop = () => {
    for (let i=0; i<flightMockData.length; i++) {
        const flight = flightMockData[i] 
        if (typeof flight !== 'undefined') {
            switchOverFlightAndPrintTheFlightClass(flight)
        } else {
            throw new FPMClientError(`The index ${i} is not existing in flightMockData`)
        }
    }
}

const mapFlightData = () => {
    return flightMockData.map(flight => {
        return {
            ...flight,
            to: 'LOL'
        } as Flight
    })
}
const mappedFlightData: Array<Flight> = mapFlightData()

const sortFlightsByPassengerDesc = () => {
    return mappedFlightData.sort((a, b) => {
        if (a.passengers > b.passengers) {
            return 1
        }
        return 0
    })
}

const sortedMappedFlights = sortFlightsByPassengerDesc()

const filterOutFlightsWithPassenersLessThan2 = (flights: Array<Flight>) => {
    return flights.filter((flight: Flight) => {
        return flight.passengers >= 2
    })
}

const climateServiceClient = new ClimateServiceClient('https://climate-service.stg.c12r.io/', new MockHTTPClient())

climateServiceClient.calculateRoadDistance('Weidenweg 2C, 85375 Neufahrn', 'Alexanderplatz 1, Berlin')
climateServiceClient.calculatAirportDistance('MUC', 'BER')

console.log('climateServiceClient', climateServiceClient)

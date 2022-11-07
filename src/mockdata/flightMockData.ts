import { FlightData, TravelClass, Route as FlightRoute } from "../model/Flight"

export const flightMockData: FlightData = [{
    calculationType: 'bundespresseball-air-travel-calculation',
    from: 'MUC',
    to: 'BER',
    passengers: 1,
    route: FlightRoute.RETURN,
    travelClass: TravelClass.ECONOMY
}, {
    calculationType: 'bundespresseball-air-travel-calculation',
    from: 'HEL',
    to: 'TXL',
    passengers: 2,
    route: FlightRoute.RETURN,
    travelClass: TravelClass.ECONOMY
}, {
    calculationType: 'bundespresseball-air-travel-calculation',
    from: 'HEL',
    to: 'TXL',
    passengers: 3,
    route: FlightRoute.RETURN,
    travelClass: TravelClass.BUSINESS
}]

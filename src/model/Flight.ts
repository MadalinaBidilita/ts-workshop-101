export type IATACode = string;

export enum TravelClass {
    ECONOMY = "economy",
    BUSINESS = "business"
}

export enum Route {
    RETURN = "return"
}

export interface Flight {

    /**
     * Type of calculation to be run in order to calculate the CO2e emissions
     */
    calculationType: string

    /**
     * An IATA code for the departure airport
     */
    from: IATACode

    /**
     * An IATA code of the destination airport
     */
    to: IATACode

    /**
     * The class of travel 
     */
    travelClass: TravelClass

    /**
     * Type of the route of this flight
     */
    route: Route

    /**
     * Amount of passengers on this flight
     */
    passengers: number
}

export type FlightData = Array<Flight>

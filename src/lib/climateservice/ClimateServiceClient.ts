import { HTTPClient } from "../httpclient/HTTPClient"

/**
 * ClimateService client is used to call the legacy climate service
 * to run calculations for finding the CO2e footprint for traveling by road, airport and sea. 
 */
export class ClimateServiceClient {

    constructor(protected endpoint: string, protected httpClinet: HTTPClient) {}

    calculateRoadDistance(addressSource: string, addressDestination: string) {
        console.log(`calculateRoadDistance ${this.endpoint}`, addressSource, addressDestination)
    }

    calculatAirportDistance(iataCodeSource: string, iataCodeDestination: string) {
        console.log(`calculatAirportDistance ${this.endpoint}`, iataCodeSource, iataCodeDestination)
    }

    // TODO: decide on the client library and map the right request body object
    request(path: string, body: object) {
        // use either axios or fetch, Node HTTP client
        this.httpClinet.request("GET", path)
    }
}

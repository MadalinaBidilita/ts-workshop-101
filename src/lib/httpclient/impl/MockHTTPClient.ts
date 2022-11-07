import { HTTPClient } from "../HTTPClient";

export class MockHTTPClient implements HTTPClient {
    request(httpMethod: "GET" | "POST", uri: string) {

        // axios(...)
        return {
            text: 'asd',
            statusCode: 232
        }
    };
}

import { HTTPClient } from "../HTTPClient";

export class AxiosHTTPClient implements HTTPClient {
    request(httpMethod: "GET" | "POST", uri: string) {

        // axios(...)
        return {
            text: 'asd',
            statusCode: 232
        }
    };
}

export interface HTTPResponse {
    text: string;
    statusCode: number;
}

export interface HTTPClient {
    request: (httpMethod: 'GET' | 'POST', uri: string) => HTTPResponse; 
}

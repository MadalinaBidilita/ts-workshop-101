export class FPMClientError extends Error {
    constructor(message: string) {
        super(message)
        console.log('Constructor executing...')
    }

    static isFPMClientError() {
        console.log('isFPMClientError?')
    }
}

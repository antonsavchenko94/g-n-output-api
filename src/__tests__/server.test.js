const http = require('http');
const startServer = require('../server');

jest.mock('http', () => ({
    createServer: jest.fn(() => ({
        listen: jest.fn(),
    })),
}))

describe('check server function', () => {
    it('should check server initialization', () => {
        startServer();
        // checking the createServer fn
        expect(http.createServer.mock.calls).toHaveLength(1);
        expect(http.createServer.mock.calls[0]).toHaveLength(1);

        // checking the listen fn
        expect(http.createServer.mock.results[0].value.listen.mock.calls).toHaveLength(1);
        expect(http.createServer.mock.results[0].value.listen.mock.calls[0]).toHaveLength(3);
        expect(http.createServer.mock.results[0].value.listen.mock.calls[0]).toHaveLength(3);
        expect(http.createServer.mock.results[0].value.listen.mock.calls[0][0]).toBe(3000);
        expect(http.createServer.mock.results[0].value.listen.mock.calls[0][1]).toBe('localhost');
    })
})

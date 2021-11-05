const getGnLetters = require('../../utils/get-gn-letters');

describe('check utilities', () => {
    it('should check getGnLetters to return only \'G\' letter',  () => {
        expect(getGnLetters(3)).toBe('G');
        expect(getGnLetters(9)).toBe('G');
        expect(getGnLetters(12)).toBe('G');
        expect(getGnLetters(33)).toBe('G');
        expect(getGnLetters(7422)).toBe('G');
    });

    it('should check getGnLetters to return only \'N\' letter',  () => {
        expect(getGnLetters(5)).toBe('N');
        expect(getGnLetters(10)).toBe('N');
        expect(getGnLetters(20)).toBe('N');
        expect(getGnLetters(25)).toBe('N');
        expect(getGnLetters(35)).toBe('N');
        expect(getGnLetters(7435)).toBe('N');
    });

    it('should check getGnLetters to return \'GN\' letters',  () => {
        expect(getGnLetters(15)).toBe('GN');
        expect(getGnLetters(30)).toBe('GN');
        expect(getGnLetters(45)).toBe('GN');
        expect(getGnLetters(60)).toBe('GN');
        expect(getGnLetters(75)).toBe('GN');
        expect(getGnLetters(90)).toBe('GN');
    });

    it('should check getGnLetters to return the same input number',  () => {
        expect(getGnLetters(1)).toBe(1);
        expect(getGnLetters(2)).toBe(2);
        expect(getGnLetters(4)).toBe(4);
        expect(getGnLetters(7)).toBe(7);
        expect(getGnLetters(13)).toBe(13);
        expect(getGnLetters(16)).toBe(16);
    });

})

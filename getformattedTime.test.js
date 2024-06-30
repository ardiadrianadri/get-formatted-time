const getFormattedTime = require('./getFormattedTime');

describe('getFormattedTime', () => {
    it('should throw an error if format is not passed', () => {
        expect(() => getFormattedTime()).toThrow('format is required');
    });

    it('should return the formatted time', () => {
        const format = 'hh:mm:ss';
        const expected = expect.stringMatching(/\d{2}:\d{2}:\d{2}/);
        expect(getFormattedTime(format)).toEqual(expected);
    });
});
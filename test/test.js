const fs = require('fs');
const path = require('path');
const rgbToRgba = require('../');
const postcss = require('postcss');

const testFixture = (fixture, options = {}) => {
    const fixtureDirectory = 'fixtures';
    const inputFile = `${fixture}.css`;
    const expectedFile = `${fixture}.expected.css`;

    const input = fs.readFileSync(path.join(__dirname, fixtureDirectory, inputFile), 'utf8');
    const expectedResult = fs.readFileSync(path.join(__dirname, fixtureDirectory, expectedFile), 'utf8');

    return postcss([rgbToRgba(options)])
    .process(input)
    .then((result) => {
        expect(result.css).toEqual(expectedResult);
        expect(result.warnings()).toEqual([]);
    });
};


describe('postcss-rgb-to-rgba', function() {
    it('handles standard rgb', () => {
        return testFixture('standard');
    });

    it('handles complex rgb', () => {
        return testFixture('complex');
    });
});

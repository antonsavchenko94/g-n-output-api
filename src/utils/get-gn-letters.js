/**
 * Function that return calculated 'GN' string
 * @param number
 * @returns {string|number} - return 'G', 'N', 'GN' or given number
 */

const getGnLetters = (number) => {
    if (typeof number === 'number' && !Number.isNaN(number)) {
        const isG = !(number % 3);
        const isN = !(number % 5);

        return isG && isN && 'GN' || isG && 'G' || isN && 'N' || number;
    }
}

module.exports = getGnLetters;

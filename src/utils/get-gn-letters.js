const getGnLetters = (number) => {
    if (typeof number === 'number' && !Number.isNaN(number)) {
        const isG = !(number % 3);
        const isN = !(number % 5);

        return isG && isN && 'GN' || isG && 'G' || isN && 'N' || number;
    }
}

module.exports = getGnLetters;

function calcAvgHeight(data) {
    // Calculate average height from received data. If no data, return null.

    // check if no data, wrong data, or no data of persons
    if (!data || typeof data !== 'object' || Object.keys(data).length === 0) {
        return null;
    }

    // get array of heights of persons
    const heights = Object.values(data)
        .filter(person => person.height)
        .map(person => person.height);

    // calculate the sum of heights
    const sum = heights.reduce((prev, cur) => (prev + cur), 0);

    // return the average height
    return (sum / heights.length);

}
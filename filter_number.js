const arr = [1, "a", "b", 2, "cd", 5, "a", true];

const filterNumbersFromArray = arr => {
    for (let i = 0; arr.length > i; i++) {
        if (!(typeof arr[i] === "number")) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
};

console.log(filterNumbersFromArray(arr));
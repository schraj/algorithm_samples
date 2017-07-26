let moveZerosLeft = (arr) => {
    const newArray = Array();
    let ctr = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] !== 0) {
            // add it to the front of the array
            // first ones added will end up at the end of the array
            newArray.unshift(arr[i]);
        } else {
            ctr++;
        }
    }

    // add the zeros to the front of the array
    for (let i = 0; i < ctr; i++) {
        newArray.unshift(0);
    }
    return newArray;
}

module.exports = moveZerosLeft;
let isPalindrome = (num) => {
    const strNum = num.toString();
    const len = strNum.length;
    //const isEvenLength = len % 2 === 0;

    // find halfway point
    const halfway = Math.floor(len / 2);

    for (let i = 0; i < halfway; i++) {
        let left = strNum[i];
        let right = strNum[(len - 1) - i];
        if (left !== right) {
            return false;
        }
    }

    return true;
}

module.exports = isPalindrome;
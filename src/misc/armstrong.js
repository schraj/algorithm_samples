let isArmstrong = (num) => {
    const strNum = num.toString();
    const len = strNum.length;
    let sum = 0;
    for (let i = 0; i < len; i++) {
        let raised = Math.pow(parseInt(strNum[i]), len);
        sum = sum + raised;
    }

    if (sum === num) {
        return true;
    }

    return false;
}

module.exports = isArmstrong;
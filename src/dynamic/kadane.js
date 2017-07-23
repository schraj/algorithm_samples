let maxSubArraySum = (a) => {
    let max_so_far = 0;
    let max_ending_here = 0;
    let result = Array();
    let tempSolution = Array();
    for (let i = 0; i < a.length; i++) {
        max_ending_here = max_ending_here + a[i];
        tempSolution.push(a[i]);
        if (max_ending_here < 0) {
            max_ending_here = 0;
            tempSolution = Array();
        }

        /* Do not compare for all elements. Compare only   
           when  max_ending_here > 0 */
        else if (max_so_far < max_ending_here) {
            max_so_far = max_ending_here;
            result = tempSolution.slice();
        }
    }
    return [max_so_far, result];
}

module.exports = maxSubArraySum;
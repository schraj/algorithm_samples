let get_k_sum_subsets_rec = function (rec_level, list, partial_list, target_sum, sets, array_stack) {
    if (rec_level === 2) {
        let x = 1;
    }
    // console.log(rec_level);
    // console.log(list);
    // console.log(partial_list);
    let list_sum = 0;
    for (let i = 0; i < partial_list.length; i++) {
        list_sum += partial_list[i];
    }

    if (list_sum === target_sum && partial_list.length > 0) {
        sets.push(partial_list);
    } else if (list_sum > target_sum) {
        return;
    } else {
        for (var i = 0; i < list.length; i++) {

            // In JS array is passed by reference so we need to save array's state
            array_stack.push(list.slice());
            array_stack.push(partial_list.slice());
            let new_partial_list = partial_list.slice();
            new_partial_list.push(list[i]);
            let new_list = list.splice(i + 1);
            get_k_sum_subsets_rec(rec_level + 1, new_list, new_partial_list, target_sum, sets, array_stack);
            partial_list = array_stack.pop();
            list = array_stack.pop();
        }
    }
};

let get_k_sum_subsets_2 = function (list, target_sum, sets) {
    let partial_list = [];
    let array_stack = [];
    get_k_sum_subsets_rec(0, list, partial_list, target_sum, sets, array_stack);
};

module.exports = get_k_sum_subsets_2;
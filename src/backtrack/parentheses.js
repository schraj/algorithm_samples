let print_all_parentheses_rec = function (n, left_count, right_count, output) {

    if (left_count >= n && right_count >= n) {
        //console.log(output);
    }

    if (left_count < n) {
        output.push('{');
        print_all_parentheses_rec(n, left_count + 1, right_count, output);
        output.pop();
    }
    if (right_count < left_count) {
        output.push('}');
        print_all_parentheses_rec(n, left_count, right_count + 1, output);
        output.pop();
    }
};

let print_all_parentheses = function (n) {
    let output = [];
    print_all_parentheses_rec(n, 0, 0, output);
    return output;
};

module.exports = print_all_parentheses;
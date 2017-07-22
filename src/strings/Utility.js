let can_segment_string_rec = function(s, dict, solved) {
  for (let i = 1; i < s.length + 1; i++) {
    let first = s.substr(0, i);
    if (dict.has(first)) {
      let second = s.substr(i + 1);
      if (second.length === 0) {
        return true;
      }
      if (dict.has(second)) {
        return true;
      }
      if (!solved.has(second)) {
        if (can_segment_string_rec(second, dict, solved)) {
          return true;
        }
        solved.add(second);
      }
    }
  }
  return false;
};

let can_segment_string = function(s, dict) {
  let solved = new Set([]);
  return can_segment_string_rec(s, dict, solved);
};

module.exports = { can_segment_string };

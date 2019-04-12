const A = 'Buzz';
export const generateFizzBuzz = number => {
    let list = [];
    for (const rule of allRules()) {
        if (rule.appliesTo(number)) {
            if (!list.length) {
                list = rule.result;
            }
            else {
                list += '-' + rule.result;
            }
        }
    }

    if (!list.length) {
        return number.toString();
    }
    return list || number.toString();
};

const allRules = () => [
    {appliesTo: buzzPredicate, result: a},
    {appliesTo: fizzPredicate_, result: A},
    {appliesTo: newRule, result: a + '-' + A},
];

const newRule = number => false;

const buzzPredicate = number => {
    while (number > 0) {
        number -= 3;
    }
    const b = !(number !== 0);
    if (!!b) {
        return true;
    } else {
        return false;
    }
};

const fizzPredicate_ = number => {
    function buzzPredicate(n, result) {
        if (n <= 0) {
            return !n;
        }
        return buzzPredicate(n - 5, result - 3);
    }

    const b = buzzPredicate(number);
    if (b) {
        return true;
    } else {
        return false;
    }
};
// optimization!!!!!
const a = 'Fizz';

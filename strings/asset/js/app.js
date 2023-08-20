// let str = "Hello bad fosh";
// let inappropriateWords = ["fosh", "foshbadtar"];
// function filter(str, inappropriateWords) {
//     for (let word of inappropriateWords) {
//         let replacement = '*'.repeat(word.length);
//         let regex = RegExp(word);
//         str = str.replace(regex, replacement);
//     }
//     return str;
// }
// let result = filter(str, inappropriateWords);
// console.log(result);

// let str = ['ali', 'yasin', 'mohamad', 'amir'];
// str.reverse()
// console.log(str)

// let str = [0 ,1, 2, 3, 4, 5, 6, 7, 8, 9, 'mohamad', 'ali', 'amir'];
// function tofarsi() {
//     let farsistr = str.toLocaleString('fa-IR');
//     return farsistr
// }
// console.log(tofarsi())

// let str = ['man', 'amir', 'mohamad', 'ali', 'yasin', 'abolfazl', 'maryam', 'narges',];
// function mostFrequentChar() {
//     let counts = [...str].reduce((acc, char) => {
//         acc[char] = (acc[char] || 0) + 1;
//         return acc;
//     }, {});
//
//     let maxChar = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
//
//     return { character: maxChar, count: counts[maxChar] };
// }
// console.log(mostFrequentChar())

// function areAnagrams(str1, str2) {
//
//     str1 = str1.replace(/\s+/g, '');
//     str2 = str2.replace(/\s+/g, '');
//
//     if (str1.length === str2.length) {
//         return true;
//     }
//     return false;
// }
//
// console.log(areAnagrams("abab  4612   c", "a  bba c      1426"));

// function number() {
//     let num = '123456789';
//     for (i = 0; num.length; i++){
//         num[i]
//     }
//     return num
// }
//
// console.log(number())

// function formatNumber(number) {
//     const strNumber = String(number);
//     const length = strNumber.length;
//
//     if (length <= 3) {
//         return strNumber;
//     }
//
//     let formattedNumber = '';
//
//     for (let i = length - 1, count = 0; i >= 0; i--) {
//         formattedNumber = strNumber[i] + formattedNumber;
//         count++;
//
//         if (count === 3 && i > 0) {
//             formattedNumber = ',' + formattedNumber;
//             count = 0;
//         }
//     }
//
//     return formattedNumber;
// }
// console.log(formatNumber(1234567890));

function isValidParentheses(str) {
    const stack = [];
    const openingBrackets = '([{';
    const closingBrackets = ')]}';

    for (let char of str) {
        if (openingBrackets.includes(char)) {
            stack.push(char);
        } else if (closingBrackets.includes(char)) {
            const correspondingOpening = openingBrackets[closingBrackets.indexOf(char)];
            if (stack.length === 0 || stack.pop() !== correspondingOpening) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(isValidParentheses("()"));
console.log(isValidParentheses("()[]{}"));
console.log(isValidParentheses("(]"));
console.log(isValidParentheses("([)]"));
console.log(isValidParentheses("{[]}"));
console.log(isValidParentheses(""));
console.log(isValidParentheses("[(])"));  
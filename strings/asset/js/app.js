let str1 = "Hello bad fosh";
let inappropriateWords = ["fosh", "foshbadtar"];
function filter(str1, inappropriateWords) {
    for (let word of inappropriateWords) {
        let replacement = '*'.repeat(word.length);
        let regex = RegExp(word);
        str1 = str1.replace(regex, replacement);
    }
    return str1;
}
let result = filter(str1, inappropriateWords);
console.log(result);

let str2 = ['ali', 'yasin', 'mohamad', 'amir'];
str2.reverse()
console.log(str2)

let str3 = [0 ,1, 2, 3, 4, 5, 6, 7, 8, 9, 'mohamad', 'ali', 'amir'];
function tofarsi() {
    let farsistr = str3.toLocaleString('fa-IR');
    return farsistr
}
console.log(tofarsi())

let str4 = ['man', 'amir', 'mohamad', 'ali', 'yasin', 'abolfazl', 'maryam', 'narges',];
function mostFrequentChar() {
    let counts = [...str4].reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {});

    let maxChar = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);

    return { character: maxChar, count: counts[maxChar] };
}
console.log(mostFrequentChar())

function areAnagrams(str5, str6) {

    str5 = str5.replace(/\s+/g, '');
    str6 = str6.replace(/\s+/g, '');

    if (str5.length === str6.length) {
        return true;
    }
    return false;
}

console.log(areAnagrams("abab  4612   c", "a  bba c      1426"));

function number() {
    let num = '123456789';
    for (i = 0; num.length; i++){
        num[i]
    }
    return num
}

console.log(number())

function formatNumber(number) {
    const strNumber = String(number);
    const length = strNumber.length;

    if (length <= 3) {
        return strNumber;
    }

    let formattedNumber = '';

    for (let i = length - 1, count = 0; i >= 0; i--) {
        formattedNumber = strNumber[i] + formattedNumber;
        count++;

        if (count === 3 && i > 0) {
            formattedNumber = ',' + formattedNumber;
            count = 0;
        }
    }

    return formattedNumber;
}
console.log(formatNumber(1234567890));

function isValidParentheses(str7) {
    const stack = [];
    const openingBrackets = '([{';
    const closingBrackets = ')]}';

    for (let char of str7) {
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

const array = [1, 2, 3, 3, 4, 4, 2, 5, 1, 5, 6, 7, 6, 6, 7, 9, 0, 0, 0, 9];
const newarray = new Set(array)
const backarray = [...newarray]
console.log(backarray)

function calculatePasswordStrength(password, commonWords) {
    if (password.length < 12) {
        return 0; 
    }

    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);

    const hasNumbers = /\d/.test(password);

    const hasSpecialChars = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);

    const hasCommonWords = commonWords.some(word => password.includes(word));

    let strength = 0;

    if (hasLowercase) {
        strength += 2;
    }

    if (hasUppercase) {
        strength += 2;
    }

    if (hasNumbers) {
        strength += 2;
    }

    if (hasSpecialChars) {
        strength += 2;
    }

    if (!hasCommonWords) {
        strength += 3;
    }

    return strength;
}
const commonWords = ['password', '123456', 'qwerty', 'letmein'];

const password = "SecureP@ssw0rd123";
const strength = calculatePasswordStrength(password, commonWords);
console.log(`Password strength: ${strength}`);
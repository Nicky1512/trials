const fibonacci = n => {
    return n < 1 ? 0 :
        n <= 2 ? 1 :
        fibonacci(n - 1) + fibonacci(n - 2);
}
const fibonacciSequence = input => {
    var f = [1, 2];
    for (let i = 1; i <= input; i++) {
        f.push(fibonacci(i));
    }
    return f;
}


console.log(fibonacci(5));
console.log(fibonacci(10));

console.log(fibonacciSequence(4));
console.log(fibonacciSequence(10));

function solution() {
    var fibno = [1, 2],
        sum = 0;

    function cal(arr) { return arr[arr.length - 1] + arr[arr.length - 2]; }
    while (fibno[fibno.length - 1] < 4e+6) {
        fibno.push(cal(fibno));
    }
    fibno.forEach(function(n) { if (n % 2 === 0) { sum += n; } });
    return sum;
}
console.log(`Solution: ${solution()}`);

//Es esta!
const sol = () => {
    var f = [];

    function* fib() {
        let a = 0,
            b = 1;
        while (a !== Infinity) {
            yield a;
            [a, b] = [b, a + b];
        }
    }
    for (let value of fib()) {
        f.push(value);
    }
    return f;
}

console.log(`Sol: ${sol()}`);


function palindromeIndex(s) {
    let result = -1;
    const slen = s.length;

    if (slen >= 1 && slen <= 100005 & s !== s.split('').reverse().join('')) {
        for (let i = 0; i < slen; i++) {
            if (s.charAt(i) != s.charAt(slen - 1 - i)) {
                let s1 = s.substring(0, i) + s.substring((i + 1));
                let s2 = s.substring(0, (slen - 1 - i)) + s.substring((len - 1 - i) + 1);

                if (s1 === s1.split('').reverse().join('')) {
                    result = i;
                } else if (s2 === s2.split('').reverse().join('')) {
                    result = slen - 1 - i;
                }
                break;
            }
        }
    }

    return result;
}
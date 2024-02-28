function nthFibonacci(n) {
    if (n === 1) return 1;
    if (n === 2) return 1;
    let a = 1;
    let b = 1;
    let index = 0;
    while (index < n - 2) {
        let c = a + b;
        a = b % 1000000007;
        b = c % 1000000007;
        index++;
    }
    return b ;
}

console.log(nthFibonacci(14521));
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function getPrimeDistances() {
    let primes = [];
    let num = 2;

    while (primes.length < 100) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }

    let distances = [];
    for (let i = 1; i < primes.length; i++) {
        distances.push(primes[i] - primes[i - 1]);
    }

    return distances;
}

const distances = getPrimeDistances();
console.log("Khoảng cách giữa 100 số nguyên tố đầu tiên:", distances);

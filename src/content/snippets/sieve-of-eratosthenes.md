---
title: Sieve of Eratosthenes
date: "October 26, 2020"
template: "snippet"
slug: "sieve-of-eratosthenes"
tags: ["Natural Number", "Sieve", "Prime", "Composite", "Eratosthenes"]
description: 'Natural Numbers that have only two factors 1 and itself are called Prime numbers. Numbers that have more than 2 factors are Composite Numbers.'
media: "sieve-of-eratosthenes"
---

### Prime Numbers
Natural Numbers that have only two factors 1 and itself are called Prime numbers. Numbers that have more than 2 factors are Composite Numbers. 1 is neither a prime nor a composite numbers.

2, 3, 5, 7, 11 are Prime Numbers as they only have 2 factors 1 and themselves.

### Sieve of Eratosthenes
There are different ways to find all prime numbers less than or equal to 'n', one of them is Sieve of Eratosthenes. In Sieve of Eratosthenes we statrt with a smallest known prime (i,e. 2) and mark of its multiples as non-prime now next number(i,e. 3) which is not marked will be a prime so, we mark all the multiples of this number as non-prime. We keep doing this till we reach a number greater than root(n). This works beacuse of fundamental theorem of arithmetic which states that every numbers can be writen as product of prime numbers in a unique way.

### Implementataion
```JavaScript
const sieveOfEratosthenes = num => {
    const isPrime = new Array(num + 1).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;

    for (let i = 2; i*i <= num; i++) {
        if (isPrime[i]) {
       	    for (let j = i*i; j<=num; j +=i) {
	        isPrime[j] = false;
	    }
        }
    }

    const primeNumbers = [];
    isPrime.forEach((item, index) => {
        if (item) {
	        primeNumbers.push(index);
        }
    });
    
    return primeNumbers;
}
```
### Complexity
- Time Complexity = $$O(n \log(\log(\sqrt{n}))))$$

$$\quad\quad i=2: $$ internal loop runs for $$\frac{n}{2}$$ times (i.e, 4, 6, 8...)

$$\quad\quad i=3: $$ internal loop runs for $$\frac{n}{3}$$ times (i.e, 9, 12, 15...)

$$\quad\quad i=4: $$ internal loop runs for $$0$$ times as 4 is not prime.

$$\quad\quad i=5: $$ internal loop runs for $$\frac{n}{5}$$ times (i.e, 25, 30, 35...)

$$\quad\quad i=6: $$ internal loop runs for $$0$$ times as 6 is not prime.
$$\quad\quad$$ .
$$\quad\quad$$ .
$$\quad\quad$$ .

$$\quad$$ Internal loop only runs for prime numbers, and for a prime number 'x' it runs for $$\frac{n}{x}$$ times.

$$\quad$$ Total Number of Iterations = $$\frac{n}{2} + \frac{n}{3} + 0 + \frac{n}{5} + ...$$ till $$i \leq \sqrt{n}$$

$$\quad\quad$$ = n (1/2 + 1/3 + 1/5...) = n (sum of reciprocal of all primes $$\leq \sqrt{n}$$)

$$\quad\quad$$ = $$n \ln(\ln(\sqrt{n})) = O(n \log(\log(\sqrt{n}))$$

- Space Complexity = $$O(n)$$ (Creates isPrime Array)





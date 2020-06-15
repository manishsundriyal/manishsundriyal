---
title:  Time - What & Why | Time & Space Complexity
date: "June 04, 2020"
template: "snippet"
slug: "time-what-and-why"
tags: ["time complexity", "time and space complexity"]
description: "According to Wikipedia
In computer science, the time complexity is the computational complexity that describes the amount of time it takes to run an algorithm."
media: "time-what-and-why"
---
### What is time complexity?
According to Wikipedia,  
In computer science, the time complexity is the computational complexity that describes the amount of time it takes to run an algorithm.

In simple words,  
Time complexity of a program is a simple measurement of how fast the time taken by a program grows, if the input increases.


### Why should we care about time complexity?

There can be more than one way to solve a problem.

**Consider this example**  
To check whether a number is Prime or not?

**Method 1**
```javascript
function isPrime(n) {
 for (let i = 2; i < n; ++i) {
    if (n % i === 0) {
        return false;
    }
 }
 return true;
}
```
Here the loop will run n - 2 times

**Method 2**
```javascript
function isPrime(n) {
  for (let i = 2; i < Math.sqrt(n); ++i) {
      if (n % i === 0) {
          return false;
      }
  }
  return true;
}
```
Here the loop will run $\sqrt{n}$ - 2 times


### Conclusion
The second method is faster. That's why time complexity is important. In real life we want softwares to be fast & smooth.
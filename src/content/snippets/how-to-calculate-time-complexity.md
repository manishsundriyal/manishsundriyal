---
title:  How to calculate time complexity | Time & Space Complexity
date: "June 05, 2020"
template: "snippet"
slug: "how-to-calculate-time-complexity"
tags: ["time complexity", "time and space complexity"]
description: "The time taken by simple statements is constant, like: This constant time is considered as Big O of 1 i.e. O(1)"
media: "how-to-calculate-time-complexity"
---
### General Rules
The time taken by simple statements is constant, like:

- `let i = 0;`
- `i = i + 1;`

This constant time is considered as Big O of 1 i.e. O(1)

What is Big O?
Don't worry, we'll cover this later in the series.

### How to calculate time complexity?

**code 1**
```javascript
for (let i = 0; i < n; ++i) {
    console.log(i);
}
```
Here the loop will run **n times**  
Time Complexity: **O(n)**

**code 2**
```javascript
for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n; ++j) {
        console.log(i, j);
    }
}
```
Here the loop will run **$n^2$ times**  
Time Complexity: **O($n^2$)**

**code 3**
```javascript
for (let i = 1; i < n; i *= 2) {
    console.log(i);
}
```
Here the loop will run **(log n)-1 times**  
1st iteration, i = 1  
2nd iteration, i = 2  
3rd iteration, i = 4  
4th iteration, i = 8  
….  
kth iteration, i = 2 ^ (k-1)  
So, 2 ^ (k-1) < n  
now taking log on both sides  
log (2 ^ (k-1)) < log n  
k-1 = **log n**  
Time Complexity: **O(log n)**

### Conclusion
Time complexity is expressed using mathematical notations. These notations represent the time required by an algorithm.

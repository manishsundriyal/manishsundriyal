---
title:  Space - What & Why | Time & Space Complexity
date: "June 06, 2020"
template: "snippet"
slug: "space-what-and-why"
tags: ["space complexity", "time and space complexity"]
description: "According to wikipedia
In computer science, the space complexity of an algorithm or a computer program is the amount of memroy space required to solve an instance of the computational problem as a function of the size of the input."
media: "space-what-and-why"
---
### What is space complexity?
According to Wikipedia,  
In computer science, the space complexity of an algorithm or a computer program is the amount of memory space required to solve an instance of the computational problem as a function of the size of the input.

In simple words,  
Space complexity of a program is a simple measurement of how fast the space taken by a program grows, if the input increases.

### Why should we care about space complexity?
A good algorithm keeps space complexity as low as possible. An algorithm with lower space complexity is always better than the one with higher.

There is often a time-space tradeoff involved. A case where an algorithm increases space usage with decreased time or vice versa.

### Examples

**Method 1**
```javascript
function fibonacci(n) {
    const arr = [0, 1];
    for (let i = 2; i <= n; ++i) {
        arr.push(arr[i - 2] + arr[ i - 1]);
    }
    return arr[n - 1];
}
```
Here we are using an array of size n and a fixed space for iteration. Hence the space complexity is O(n).

**Method 2**
```javascript
function fibonacci(n) {
    let x = 0, y = 1, z;
    if (n === 0) {
        return x;
    }
    if (n === 1) {
        return y;
    }
    for (let i = 2; i <= n; ++i) {
        z = x + y;
        x = y;
        y = z;
    }
    return z;
}
```
Here we are using a fixed space for 4 variables. Hence the space complexity is O(1)

### Conclusion
The second method is better.

There is no point in using more space to solve a problem if, we can do the same with lesser space complexity.

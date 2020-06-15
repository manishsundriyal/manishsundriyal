---
title:  How to calculate space complexity | Time & Space Complexity
date: "June 07, 2020"
template: "snippet"
slug: "how-to-calculate-space-complexity"
tags: ["space complexity", "time and space complexity"]
description: "The space taken by simple statements is fixed(constant), like:
let i = 0;
This space requirement is constant and is considered as Big O of 1 i.e., O(1)"
media: "how-to-calculate-space-complexity"
---
### General rules
The space taken by variable declaration is fixed(constant), like:

- `let i = 0;`

This space requirement is constant and is considered as **Big O** of 1 i.e., **O(1)**

Our focus is more on the non-constant space requirement, which grows with input size.

### How to calculate space complexity?

**code 1**
```javascript
const arr = [];
for (let i = 0; i < n; ++i) {
    arr.push(i);
}
```
Here the array will take **n space**
Space Complexity: **O(n)**

**code 2**
```javascript
const arr = [];
for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n; ++j) {
        arr.push(i + j);
    }
}
```
Here the array will take **$n^2$ space**
Space Complexity: **O($n^2$)**

**code 3**
```javascript
const arr = [];
for (let i = 1; i < n; i *= 2) {
    arr.push(i);
}
```
Here the array will take **(log n)-1 space**  
Space Complexity: **O(log n)**  

### Conclusion
Similar to Time complexity, Space complexity also plays a crucial role in determining the efficiency of an algorithm/program.

If an algorithm takes up some extra time, you can still wait for its execution.

But, if a program takes up a lot of memory space, then due to the machine’s memory limitation it will not run.  
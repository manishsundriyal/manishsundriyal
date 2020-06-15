---
title:  Practice Problems | Time & Space Complexity
date: "June 09, 2020"
template: "snippet"
slug: "time-space-complexity-practice-problems-1"
tags: ["time complexity", "space complexity", "time and space complexity"]
description: "What is the time & space complexity of the following code:"
media: "time-and-space-complexity-practice-problems-1"
---
**Problem 1**  
What is the time & space complexity of the following code:

```javascript
let a = 0, b = 0;

for (let i = 0; i < n; ++i) {
    a = a + i;
}
for (let j = 0; j < m; ++j) {
    b = b + j;
}
```

**Problem 2**  
What is the time & space complexity of the following code:
```javascript
let a = 0, b = 0;
for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n; ++j) {
        a = a + j;
    }
}
for (let k = 0; k < n; ++k) {
    b = b + k;
}
```

**Problem 3**  
What is the time and space complexity of the following code:
```javascript
let a = 0;
for (let i = 0; i < n; ++i) {
    for (let j = n; j > i; --j) {
        a = a + i + j;
    }
}
```

### Solutions

**Problem 1:**  
**Time Complexity:** O(n + m)  
**Space Complexity:** O(1)  

**Problem 2:**  
**Time Complexity:** O($n^2$)  
**Space Complexity:** O(1)  

**Problem 3:**  
**Time Complexity:** O($n^2$)  
**Space Complexity:** O(1)  

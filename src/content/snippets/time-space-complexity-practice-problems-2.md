---
title:  Practice Problems II | Time & Space Complexity
date: "June 10, 2020"
template: "snippet"
slug: "time-space-complexity-practice-problems-2"
tags: ["time complexity", "time and space complexity"]
description: "What is the time complexity of the following code:"
media: "time-and-space-complexity-practice-problems-2"
---
**Problem 1**  
What is the time complexity of the following code:
```javascript
for (let i = n; i > 0; i = parseInt(i / 2)) {
    console.log(i);
}
```

**Problem 2**  
What is the time complexity of the following code:
```javascript
for (let i = 1; i < n; i = i * 2) {
    console.log(i);
}
```

**Problem 3**  
What is the time complexity of the following code:
```javascript
for (let i = 0; i < n; ++i) {
    for (let j = 1; j < n; j = j * 2) {
        console.log(j);
    }
}
```

### Solutions

**Problem 1:**  
**Time Complexity:** O(log n)

**Problem 2:**  
**Time Complexity:** O(log n)

**Problem 3:**  
**Time Complexity:** O(nlog n)

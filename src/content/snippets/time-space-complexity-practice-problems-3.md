---
title:  Practice Problems III (Recursion) | Time & Space Complexity
date: "June 11, 2020"
template: "snippet"
slug: "time-space-complexity-practice-problems-3"
tags: ["time complexity", "time and space complexity", "recursion"]
description: "What is the time complexity of the following code:"
media: "time-and-space-complexity-practice-problems-3"
---
**Problem 1**  
What is the time complexity of the following code:
```javascript
// search an element in an array
// list is already sorted
function search (list, item, start, end) {
    if (start > end) {
        return false;
    }
    const mid = Math.floor((start + end) / 2);
    if (list[mid] < item) {
        return search(list, item, mid + 1, end);
    }
    if (list[mid] > item) {
        return search(list, item, start, mid - 1);
    }
    return true;
}
```

**Problem 2**  
What is the time complexity of the following code: 
```javascript
// count the occurrence of an element in an array
// list is already sorted
function count (list, item, start, end) {
    if (start > end) {
        return 0;
    }
    const mid = Math.floor((start + end) / 2);
    if (list[mid] < item) {
        return count(list, item, mid + 1, end);
    }
    if (list[mid] > item) {
        return count(list, item, start, mid - 1);
    }
    return count(list, item, start, mid - 1) + 1 + count(list, item, mid + 1, end);
}
```

**Problem 3**  
What is the time complexity of the following code:
```javascript
// Fibonacci of nth element
function fibonacci (n) {
    if (n <= 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
```

### Solutions

**Problem 1:**  
**Time Complexity:** O(log n)

**Problem 2:**  
**Time Complexity:** O(n)

**Problem 3:**  
**Time Complexity:** O($2^n$)

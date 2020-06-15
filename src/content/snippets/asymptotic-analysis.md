---
title:  Asymptotic Analysis | Time & Space Complexity
date: "June 12, 2020"
template: "snippet"
slug: "asymptotic-analysis"
tags: ["time and space complexity"]
description: "According to Wikipedia
In mathematical analysis, asymptotic analysis, also known as asymptotics, is a method of describing limiting behavior."
media: "asymptotic-analysis"
---
### What is Asymptotic Analysis?
According to Wikipedia,  
In mathematical analysis, asymptotic analysis, also known as asymptotics, is a method of describing limiting behavior.

In simple words,  
Evaluation of the performance of an algorithm in terms of input size.
How does the time/space taken by an algorithm change with the input size?

### Cases to analyze an algorithm

- **Worst Case Analysis**  
In this case, we calculate the upper bound on the running time of an algorithm.  
In this case, we consider such inputs so that the algorithm executes the maximum number of operations.

- **Best Case Analysis**  
In this case, we calculate the lower bound on the running time of an algorithm.  
 In this case, we consider such inputs so that the algorithm executes a minimum of operations.

- **Average Case Analysis**  
In this case, we calculate both upper & lower bound on the running time of an algorithm.  
In this case, we consider all possible inputs so that the algorithm executes an average of maximum & minimum number of operations.

### Example

```javascript
// linear search algorithm
function linearSearch(list, item) {
    for (let i = 0; i < list.length; ++i) {
        if (list[i] == item) {
            return true;
        }
    }
    return false;
}
```

### In-depth
**For a linear search algorithm,**  
where N = length of array (list.length)

**Worst Case:**  
When the element to be searched is either not present in the array or is present at the end of the array.  
**Time Complexity:** O(n)

**Best Case:**  
When the element to be searched is present at the first location of the array.  
**Time Complexity:** O(1)

**Average Case:**  
Average of all the cases, when the element is present at all the locations.  
**Time Complexity:** (N + (N - 1) + (N - 2) + ... + 1) / N  
**Time Complexity:** O(N)

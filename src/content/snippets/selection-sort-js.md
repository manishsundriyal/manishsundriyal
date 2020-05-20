---
title: Selection Sort - JS
date: "April 05, 2020"
template: "snippet"
slug: "selection-sort-js"
tags: ["sorting", "algorithms"]
description: "When it comes to sorting, our(at least mine) brain works in the following way?
1. Find the smallest element and swap it with the first element.
2. Find the second smallest element and swap it with the second element.
3. Find the third smallest element and swap it with the third element."
media: "selection-sort-js"
---
When it comes to sorting, our(at least mine) brain works in the following way?
1. Find the smallest element and swap it with the first element.
2. Find the second smallest element and swap it with the second element.
3. Find the third smallest element and swap it with the third element.  
…  
4. Find the nth smallest element and swap it with the nth element. Do this till the array is sorted.

That’s how **Selection sort** works. It selects the next smallest element and swaps it into its place.  
Simple right?

### Naming
It’s obvious that the name **Selection sort** is because it works by *selecting* and placing next smallest element.

### Performance
Due to its quadratic time complexity Selection sort algorithm performs poorly with large lists.

The Selection sort works well with small lists. Especially when we need to check if the list is already sorted or not, that’s because the way it works uses very minimal temporary storage space.
 
|Case|Complexity
|----------------|--------------
**Best case time complexity**| $Ω(n^2)$ 
**Average case time complexity**|$Θ(n^2)$
**Worst case time complexity**|$O(n^2)$
**Worst case space complexity**|$O(1)$

**Note:** Selection sort is not a stable sorting algorithm.
What is stability in the sorting algorithm?
[Find out here](https://en.wikipedia.org/wiki/Sorting_algorithm#Stability).


### Implementation

```javascript
function selectionSort(unsortedList) {
 const list = [...unsortedList];
    for (let i = 0; i < list.length - 1; i += 1 ) {
        // find minimum element in rest of the array
        let minIndex = i;
        for (let j = i + 1; j < list.length; j += 1) {
            if (list[j] < list[minIndex]) {
                minIndex = j;
            }
        }
        // swap if with the minimum element, if any
        if (minIndex !== i) {
            [list[i], list[minIndex]] = [list[minIndex], list[i]];
        }
    }
    return list;
}
```

### Visualization

![visual-selection-sort](https://miro.medium.com/max/1400/1*SvICg3o1_-Mjr79ZCkGL8A.gif)

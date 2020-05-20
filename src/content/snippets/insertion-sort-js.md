---
title: Insertion Sort - JS
date: "April 05, 2020"
template: "snippet"
slug: "insertion-sort-js"
tags: ["sorting", "algorithms"]
description: "In Selection sort, we first find the smallest element in the remaining list and then swap it with its appropriate position.What if instead of searching for the smallest element on each iteration, we just place the current element to its appropriate position in the so-far sorted list."
media: "insertion-sort-js"
---
In Selection sort, we first find the smallest element in the remaining list and then swap it with its appropriate position.

What if instead of searching for the smallest element on each iteration, we just place the current element to its appropriate position in the so-far sorted list.

**That’s what Insertion sort is.**

In Insertion sort, we traverse over the list and place the current element to its correct position, in the sorted list.

The human card sorting example is very popular for Insertion sort. Here is how I think of it.

Let’s suppose the left side is the sorted area, and the right side is the unsorted area. Now we have our unsorted face-up cards on the right side.

Now traversing from left to right, we’ll pick the leftmost card from the right side (unsorted area) and we’ll place this card to its appropriate position on the left side (sorted area). Keep doing this until the right side (unsorted area) is empty, which means all the cards are sorted now.

![human-card-insertion-sort](https://miro.medium.com/max/1400/1*bFsd0CKgyev1cukHxx0DFA.png)

### Naming
It’s obvious that the name **Insertion sort** is because it works by *inserting* the selected element to its correct position.

### Performance
It’s not as efficient as quicksort, heapsort, or merge sort, but it's better than bubble and selection sort.

One of the major advantages of Insertion sort is it can sort a list as it receives it. This means it can be used where the list is dynamic and we need to maintain a sorted version of it.

|Case|Complexity
|----------------|--------------
**Best case time complexity**| $Ω(n)$ 
**Average case time complexity**|$Θ(n^2)$
**Worst case time complexity**|$O(n^2)$
**Worst case space complexity**|$O(1)$

**Note:** Insertion sort is a stable sorting algorithm.
What is stability in the sorting algorithm?
[Find out here](https://en.wikipedia.org/wiki/Sorting_algorithm#Stability).

### Implementation

```javascript
function insertionSort(unsortedList) {
    const list = [...unsortedList];
    for (let i = 1; i < list.length; i += 1) {
        const currentElement = list[i];
        // if previous elements (sorted area) greater than the current element, then shift all those elements 1 step forward
        let j = i - 1;
        while(j >= 0 && list[j] > currentElement) {
            list[j + 1] = list[j];
            j -= 1;
        }
        // now place the current element at correct position
        list[j + 1] = currentElement;
    }
    return list;
};
```

### Visualization
![insertion-sort-visual](https://miro.medium.com/max/1400/1*GMuXWPqgqSbBdywbs3EMaQ.gif)


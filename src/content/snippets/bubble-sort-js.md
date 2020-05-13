---
title: Bubble Sort - JS
date: "April 01, 2020"
template: "snippet"
slug: "bubble-sort-js"
tags: ["sorting", "algorithms"]
description: "We all may agree that Bubble sort is the simplest sorting algorithm, that traverses the list and compares adjacent elements and swaps them if they are in the wrong order."
media: "bubble-sort-js"
---
We all may agree that Bubble sort is the simplest sorting algorithm, that traverses the list and compares adjacent elements and swaps them if they are in the wrong order.

### Naming
**Bubble sort** is also known as **Sinking sort**. As all the larger values (*heavier*) *sink down* to the bottom of the list, whereas smaller values (*lighter*) *bubble up* to the top of the list.

### Performance
Bubble sort algorithm performs poorly when it comes to real-world use cases. Mostly used for educational purposes.

Bubble sort has a worst-case time complexity of $O(n^2)$, where n is the number of items being sorted. 
 
|Case|Complexity
|----------------|--------------
**Best case time complexity**| $Ω(n)$ 
**Average case time complexity**|$Θ(n^2)$
**Worst case time complexity**|$O(n^2)$
**Worst case space complexity**|$O(1)$

**Note:** Bubble sort is a stable sorting algorithm.
What is stability in the sorting algorithm?
[Find out here]([https://en.wikipedia.org/wiki/Sorting_algorithm#Stability](https://en.wikipedia.org/wiki/Sorting_algorithm#Stability)).


### Implementation

```javascript
function bubbleSort(unsortedList) {
	const list = [...unsortedList];
	for(let i = 0; i < list.length; i += 1) {
		// last i elements are already sorted
		for (let j = 0; j < list.length - i - 1; j += 1) {
			// swap elements if they are in wrong order
			if (list[j] > list[j + 1]) {
				[list[j], list[j + 1]] = [list[j + 1], list[j]];
			}
		}
	}
	return list;
}
```

### Visualization

![visual-bubble-sort](https://miro.medium.com/max/1400/1*HfuTt9EC3ctYbH8IZQRQiQ.gif)

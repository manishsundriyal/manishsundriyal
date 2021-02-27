---
title: Fast Exponentiation
date: "October 23, 2020"
template: "snippet"
slug: "fast-exponentiation"
tags: ["Exponentiation", "Exponent", "Divide & Conquer", "Binary Exponentiation"]
description: 'Exponentiation is a mathematical operation on two numbers (binary operation), one of the number is called base and other one is called exponent or power.'
media: "euclidean-gcd-algorithm"
---

# Fast Exponentiation
### Exponentiation:
Exponentiation is a mathematical operation operates on two numbers (binary operation), one of the number is called base and other one is called exponent or power. It is denoted by a^n where 'a' is base and 'n' is exponent.
```
a^n = a * a * a *... n times.
```
### Regular Approach:
A simple approach to calculate a^n is to multiply ‘a’ with itself for ‘n’ times. While implementing it we need to iterate for ‘n’ times and calculate the product result*a in each iteration with result set to value 1 before iterating for the product. Time Complexity for this approach is O(n) hence it is not very efficient and takes lot of time when ‘n’ is large.

```javascript
Const power=(base,exp)=>{
	let result=1;
	for(let i=0;i<exp;i++){
		result*=base;
	}
	return result;
}
```
### Fast Exponentiation:
A better approach is to use divide and conquer technique and break down the problem into simpler problem, in this case we can keep breaking this series of product into 2 identical parts till we get the base number itself i,e.
If n is even we can break it as:
```
a^n = a * a * a *... n times.
a^n = (a * a * a *... n/2 times) * (a * a * a *... n/2 times).
```
Here both parts are identical so we don’t need to calculate both parts. If n would have been odd we can break it as:
```
a^n = (a * a * a *... floor(n/2) times) * a * (a * a * a *... floor(n/2) times)
```
now again we get to identical parts. We don’t have to stop here we will keep breaking it till we get (n/2^x)=1 (base number). This approach is much faster than previous approach and can be implemented using recursion. Its Time Complexity is O(log(n)).

```javascript
const power=(base,exp)=>{
	if(exp===0){
		return 1;
	}
	if(exp===1){
		return base;
	}
	const result = power(base, Math.floor(exp/2)));
	if(exp%2==0){
		return result*result;
	}
    return result*base*result;
}
```
There is another approach binary exponentiation that uses bit manipulation and gives same time complexity as this approach.

### Complexity:
Regular Approach:
- Time Complexity = O(n)			
- Space Complexity = O(1)

Fast Exponentiation:
- Time Complexity = O(Log(n))		
- Space Complexity = O(Log(n)) (Size of Recursion Stack)

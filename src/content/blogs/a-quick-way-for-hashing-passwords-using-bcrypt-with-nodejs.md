---
title: A quick way for hashing passwords using Bcrypt with Nodejs
date: "April 03, 2020"
template: "blog"
slug: "a-quick-way-for-hashing-passwords-using-bcrypt-with-nodejs"
tags: ["security", "bcrypt", "nodejs", "expressjs", "passwords"]
description: ""
media: "/folder/image.png"
---
When I first came across the bcrypt module, I felt that it was fun and easy to use it for hashing passwords. According to [Wikipedia](https://en.wikipedia.org/wiki/Bcrypt) “bcrypt is a password hashing function designed by [Niels Provos](https://en.wikipedia.org/wiki/Niels_Provos) and David Mazières, based on the [Blowfish](https://en.wikipedia.org/wiki/Blowfish_(cipher)) cipher”.

Let’s see how we can use it in our Node.js application.

![hero image](https://miro.medium.com/max/1400/1*sMVUfKt06jxJIhjPjFaRWQ.png)
*Photo by [Jon Moore](https://unsplash.com/@thejmoore?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on Unsplash*
### Install via npm
```
npm install --save bcrypt
```  
### Cryptography terms
Before we use it, let’s first have a look at some terms.
**Salt:** A [salt](https://en.wikipedia.org/wiki/Salt_(cryptography)) is a random data that is used as an additional input to a one-way function that hashes data.

![The table illustrates the relation of salt value the hashed value](https://miro.medium.com/max/1400/1*W5HPAfGi66eTDMRA3lFx5A.png)
*The table illustrates the relation of salt value the hashed value*

**Salt Rounds:** This is the cost factor that indicates the amount of time needed to calculate a single bcrypt hash. Higher the salt rounds, the more hashing rounds are done, hence the time and difficulty is increased while brute-forcing. For example, a cost factor of n means that the calculation will be done 2^n times.

### Implementation
```javascript
const bcrypt = require('bcrypt');
const saltRounds = 10;
const yourPassword = "someRandomPasswordHere";
```
So, there are two ways to hash a password:
##### 1. Generate a salt and hash on separate function calls

```javascript
bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(yourPassword, salt, (err, hash) => {
        // Now we can store the password hash in db.
    });
});
```

##### 2. Auto-gen a salt and hash on same function call

```javascript
bcrypt.hash(yourPassword, saltRounds, (err, hash) => {
    // Now we can store the password hash in db.
});
```
Now if we want to compare the password entered by the user with the previously stored password hash, we can easily compare it.
```javascript
// Load hash from the db, which was previously stored
bcrypt.compare(myPlaintextPassword, hash, function(err, res) {
  // if res == true, password matched
  // else wrong password
});

```
Both the ways mentioned above can also be achieved with promises, these methods (hash & compare) will return a Promise when a callback is not defined.

Bcrypt also provides methods like genSaltSync, HashSync and CompareSync to perform synchronously. However, aysnc methods are preferred because of the fact that hashing done by bcyrpt is CPU intensive, so the sync methods will block event loop and our application will not serve any other request until the sync methods are completed executed.

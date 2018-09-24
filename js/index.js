/*
index.js
*/

"use strict";

var msg = "hello javascript";
console.log(msg);

var resultsDiv = document.getElementById("results");
resultsDiv.innerHTML = "<p>This is from JavaScript.</p>";

console.log("msg is " + typeof(msg));
console.log("resultsDiv is " + typeof(resultsDiv));

var none;
console.log("none is " + typeof(none));

var aNumber = 0;
console.log("aNumber is " + typeof(aNumber));

var trueFalse = true;
console.log("trueFalse is " + typeof(trueFalse));

// nonexistent = "this shouldn't work";
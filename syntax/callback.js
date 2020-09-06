// function a() {
//     console.log('A');
// }

const { callbackify } = require("util");


var a = function() {
    console.log('A');
}
a();

function slowfunc(calllback) {
    callback();
}

slowfunc(a);

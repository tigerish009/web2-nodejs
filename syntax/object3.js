var v1 = 'v1';
var v2 = 'v2';
//10000 code
v1 = 'egoing';
var v2 = 'v2';

var o = {
    v1 : 'v1',
    v2 : 'v2'
}

function f1() {
    console.log(o.v1);
}

function f2() {
    console.log(o.v2);
}

f1();
f2();


var q = {
    v1:'v3',
    v2:'v4',
    f1:function () {
        console.log(this.v1);
    },
    f2:function() {
        console.log(this.v2);
    }
}

q.f1();
q.f2();
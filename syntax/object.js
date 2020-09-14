//배열
var members = ['egoing', 'k8805', 'hoya']
console.log(members[1]);
var i = 0;
while(i < members.length) {
    console.log('array loop', members[i]);
    i = i+1;
}

//객체
var roles = {
    'programmer':'egoing',
    'designer':'k8805',
    'manager':'hoya'
}

console.log(roles.designer);
//객체는 객체명에 점 찍고 고유값(식별자,key)을 불러온다

for(var name in roles) {
    console.log('object => ', name, ', value => ', roles[name]);
}
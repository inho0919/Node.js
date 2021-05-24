// 1. 기본 문법

var names;
names = "Inho";

var num1;
num1 = 21;

var num2 = 3;

var sum = num1 + num2;

var sum2 = name + num1;

var sum3 = "Test : " + 3;

// 한줄주석
/*
여러줄 주석
*/

// 2. 함수
function sum(param1, param2, param3)
{
    return param1 + param2 + param3;
}

var result = sum(1,2,3);

console.log('result = ' + result);

function prints(param1)
{
    console.log("param1 = " + param1);
}

print("내용");

// 3. 조건문
var a = 10;

if (a > 11) {
    console.log('a가 11보다 큽니다'); 
} else if(a == 11) {
    console.log('a가 11과 같습니다');
} else {
    console.log('a가 11보다 작습니다');
}

// 4.반복문

var i=0;
while(i < 10) {
    console.log("for : i의 값은="+i);
    i=i+1;
}

// 5. 클래스

function Clazz(msg){
    this.name = 'I am Class';
    this.message = msg;

    message2 = "find me!";

    this.print = function(){
        console.log(message2);
    };
}

// 6. 객체 생성
var myClazz = new Clazz('good to see u!');
console.log(myClazz.message);
console.log(myClazz.message2);
myClazz.print();

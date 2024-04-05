
function env(){
    console.log(message);
var message = 'hello world';
var age = 18;
age="done";
console.log(message);
console.log(age);
for(var i=0;i<5;i++){
    console.log('--',i);

}console.log(i);

}
env();

{let message= "hello";
message='else';
console.log(message);}
const message="abbd";
console.log(typeof(message));
{let arr=['a','b','c','d'];
arr[0]='abcd';
console.log(arr);}

{
    let str='12';
    let age='20';
    let ans=(age*1)+(str*1);
    console.log(ans);
}
{
    let a=['a','b','c','d'];
    let cpy =[...a];
    console.log(a,cpy);
    if(a==cpy){
        console.log('1.yes');
    }else{
        console.log('1.no');
        if(a===cpy){
            console.log('2.yes');

        }else{
            console.log('2.no');
        }
    }

}
let a=['a','b','c','d'];
let cpy =[...a];
console.log(a,cpy);
if(a=!cpy){
    console.log('1.yes');
}else{
    console.log('1.no');
    if(a!=cpy){
        console.log('2.yes');

    }else{
        console.log('2.no');
    }
}
{
    const str='yashodhantyagi';
    const usrname='my name is '
    const ans=`${usrname} ${str}`;
    console.log(ans);
}
{
function print(str){
    console.log(str);
}
const s='hello ';
print(s);

function sum(a,b){
    if(a&&b){console.log(a+b);}
    else(a||b)
    console.log(a-b);
}
const a='10';
const b='15';
sum(a,b);}
{function sum(a,b){
    if(a&&b){
        console.log(a+b);}
        else if(a)
        console.log(a);
    else(b)
    console.log(a+b);
    
}
const a='10';
const b='0';
sum(a,b)}
{
    function print(){
        console.log('--');

    }
    const a=function print(){
        console.log('--');
    }
}
print(a);

{
    let a=2;
    switch(a)
    {
        case 1: {
            console.log('one');
            break;

        };
        case 2:{
            console.log('two');
        }
    }
}
{const obj = new Object();
obj[12]='twelve';
obj[1]='twelve';
obj[3]='twelve';
console.log(obj);}
{
    const obj={
        1:'one',
        'name':'likhilesh',
        'lastname':'singh',
        12:'twelve',
    };
    const x=prompt('please tell the property')
    console.log(obj[x]);
}
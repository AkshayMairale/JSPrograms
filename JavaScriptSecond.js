//Arithmatic Operators
let a=23;
let b=34
let c=a+b;
console.log("a+b="+ c);

let x=23;
let y=34
let z=x*y;
console.log("a*b="+ z);

let l=23;
let m=34
let n=l-m;
console.log("l-m="+ n);

let i=23;
let j=34
let k=l/m;
console.log("i/j="+ k);

let d=5;
let e=2
console.log("d%e="+d%e);
console.log("d**e="+d**e); //It is an exponential function as like(5*5)

console.log("d++="+ d++);
console.log("d++="+ d);

console.log("++d="+ ++d);
console.log("++d="+ ++d);

console.log("d--="+ d--);
console.log("d--="+ d);

console.log("--d="+ --d);
console.log("--d="+ --d);


let s=6;
let t=8;
console.log("s==t=", s==t);

let o=8;
let p="8";
console.log("o==p=" ,o==p);
console.log("o===p=" ,o===p);
console.log("o==p=" ,o!==p);

let cond1=2>4;
let cond2=3>2;
console.log("cond1 && cond2",cond1&&cond2 )
console.log("cond1 && cond2",cond1||cond2 )



let age=17;
if(age>=18){
    console.log("You can vote")
}
else
    {
        console.log("You cannot vote")

}



let number=18;
if(number%2===0){
    console.log(number,"This Is Even Number")
}
else
    {
        console.log(number,"This Is Odd Number")

}

let mode= "Blue";
let color;
if(mode==="Black"){

console.log("Black")
}
else if(mode==="Blue"){
    console.log("Blue")
}
else{
    console.log("White")
}

/*alert("Hello Akshay Mairale");
let number1=prompt("Please enter a number");

if(number1%5===0){
     console.log(number1,"This number multiply by 5");
}
else{
    console.log(number1,"This number cannot multiply by 5");
}*/



let marks=prompt("Please Enter The Marks");
if(marks>=80 && marks<=100){
    console.log("A Grade");
}
else if(marks>=70 && marks<=79){
    console.log("B Grade");
}
else if(marks>=60 && marks<=69){
    console.log("C Grade");
}
else if(marks>=50 && marks<=59){
    console.log("D Grade");
}
else if(marks>=40 && marks<=49){
    console.log("E Grade");
}
else if(marks>=30 && marks<=39){
    console.log("F Grade");
}





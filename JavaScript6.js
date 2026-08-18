//Window Object:It is a browser object which is automatically created by browser,it's a globle object and it has multiple properties and methods.
//DOM(document Object Model)When the web Page is loaded then web page creates a DOM of the page,we can access the HTML code in JS.
//HTML code automatically converted into object in js it's mean all the elements of HTML converted into the object in JS.This Object is known as document.
//This Object present in Window Object.
//DOM is used for dynamically changes in our web page
document.body.style.background="Red";//for background color
document.body.childNodes[1].innerText="Java Script Learner";//For change the text
    
//How to access the element in JS.
//Access with ID=document.getElementById("IDNAME");
 let header=document.getElementById("Heading");//Access the ID # is a symbole of ID and ID element not exist then null will be print.
 console.dir(header);

 //Selecting with class: when we want to use multiple elements in single catagory then we use. It returns the HTML collection 
//It's work like an array and class does not exist then Empty element collection will be print.
let headings=document.getElementsByClassName("Heading");
console.dir(headings);

//Selecting with tagName:
let tagname=document.getElementsByTagName("p");
console.dir(tagname);

//Query Selector:document.getQuerySelector(ByID/ByName/ByTag).
let query=document.querySelector("p");
console.dir(query);

let query1=document.querySelectorAll("h1");// We can access all type of element.
console.dir(query1);

//homework:textNode,elementNode,CommentNode

let list=document.querySelector("p").innerText;
console.dir(list);

let list1=document.querySelectorAll("div");
console.dir(list1);

let list2=document.querySelectorAll("div").innerHTML;
console.dir(list2);

let practice=document.querySelector("h2").innerText;
console.dir(practice);
practice=practice+" from apna college";
console.dir(practice);

let h12=document.querySelectorAll(".Box");
console.dir(h12);

let str="Playwright";
    let Reverse=str.split("").reverse().join("");
    console.log(Reverse);


let str1="Akshay";
let reverse1=str1.split("").reverse().join("");
console.log(reverse1);


//Reverse word and sentense string
let str2="Mairale";
let reverse2="";
for(let i=str2.length-1;i>=0;--i){

    reverse2=reverse2+str2[i]
}
console.log(reverse2);



let sentence="I am Akshay";
let ReverseSentence = sentence.split(" ");
let result="";
for(let i=ReverseSentence.length-1;i>=0;i--){
result=result + ReverseSentence[i]+" ";
}
console.log(result.trim());


let sentence1="Akshay Mairale";
let ReverseSentense1=sentence1.split(" ");
let result1=[];
for(let i=ReverseSentense1.length-1;i>=0;i--){

    result1.push(ReverseSentense1[i]);
}
console.log(result1.join(" "));




let sentence2 = "I am learning JavaScript";
let words = sentence2.split(" ");
let reverse4 = [];

for (let i = words.length - 1; i >= 0; i--) {
    reverse4.push(words[i]);
}

console.log(reverse4.join(" "));


let sentence9 = "I am learning JavaScript";
let result9 = "";

for (let i = sentence9.length - 1; i >= 0; i--) {
    result9 = result9 + sentence9[i];
}
console.log(result9);


let AAA="Shivaji";
let BBB=AAA.split("").reverse().join("");
console.log(BBB);

let CCC="Chatrapati Shivaji Maharaj";
let DDD="";
for(let i=CCC.length-1;i>=0;--i){

    DDD=DDD+CCC[i];
}
console.log(DDD);


let REVERSE="Akshay Abhiman Mairale";
let REVERSESENTENCE=REVERSE.split(" ");
let RESULT="";

for(let i=REVERSESENTENCE.length-1; i>=0; --i){
RESULT=RESULT+REVERSESENTENCE[i]+" ";

}
console.log(RESULT.trim());


let number=[64,48,23,58,98,28,93];
let largestNumber=number[0];
for(let i=0;i<number.length;i++){
if(largestNumber<number[i]){
largestNumber=number[i];

}
}
console.log(largestNumber)

let number8=[64,48,23,58,98,28,93,78];
let lgnumber=number8[0];
for(let i=0;i<number8.length;i++){
if(lgnumber<number8[i]){

    lgnumber=number8[i];
}

}
console.log(lgnumber)

//Second Largest Number
let number9=[64,48,23,58,98,28,93,78];
let largestNumber1=number9[0];
let secondLargest=number9[0];
for(let i=0;i<number9.length;i++){
    if(number9[i]>largestNumber1){
    secondLargest=largestNumber1;
    largestNumber1=number9[i];
    }
    else if(number9[i]>secondLargest && number9[i]!=largestNumber1){
        secondLargest=number9[i];
}
}
 console.log(secondLargest);


 // convert the string "aAbBcC" into AaBaCc
let input1="AaBbCc";
let result5="";
for(let i=0;i<input1.length-1;i+=2){
result5=result5+input1[i+1]+input1[i];

    }
    console.log(result5);   

//CC print only
let input="aAbBcC";
let result11="";
for(let i=0;i<input.length-1;i+=4){
    if(input[i+3]!==undefined && input[i+2]!==undefined){
    result11=result11+input[i+5]+input[i+4];
    }
}
console.log(result11);

//only ABC print
let input4="aAbBcC";
let result01="";
for(let i=0;i<input4.length-1;i+=2){
   
    result01=result01+input4[i+1];
    }

console.log(result01);



//only abc print
let input10="aAbBcC";
let resultPrint="";
for(let i=0;i<input10.length-1;i+=2){
    resultPrint=resultPrint+input10[i];
    }

console.log(resultPrint);

//Reverse this String
let input12="aAbBcC";
let reverseString="";
for(let i=input12.length-1;i>=0;--i){
reverseString=reverseString+input12[i];

}
console.log(reverseString);

let sentenceTwo="I am software tester and I am Automation Tester";
let sentenceTwoArray=sentenceTwo.split(" ");
let Words=[];
for(let i=0;i<sentenceTwoArray.length;i++){ 
if(!Words.includes(sentenceTwoArray[i])){
 Words.push(sentenceTwoArray[i]);
}
}
console.log(Words);




let rajesh="Akshay Mairale";
console.log(rajesh.length);
let rajeshArray=rajesh.split(" ");
let rajesh2=[];
let count=0;
for(let i=0;i<rajeshArray.length;i+=3){
rajesh2=rajesh2+rajesh[i+3]+rajesh[i+10]+" ";
    }
 console.log(rajesh2);


let rajesh3="Akshay Mairale";
console.log(rajesh3.length);
let count1=0;
for(let i=0;i<rajesh3.length;i++){

 if(rajesh3[i].toLowerCase()=="a" && rajesh3[i].toUpperCase()=="A" ){ 
  count1++;
}
}
console.log("Count:"+count1);

let oneString="AHHihsgus  uhaHIAhi IIsihiaiISH";
let removeTheSpaces=oneString.split(" ").join("");
let capital="";
for(let i=0;i<removeTheSpaces.length;i++){
if(removeTheSpaces[i]==removeTheSpaces[i].toUpperCase()){
capital=capital+removeTheSpaces[i]+"";
}
}
console.log(capital);

//only uppercase I aplhabets count
let oneString1="AHHihsgus uhaHIAhi IIsihiaiISH";
let removeTheSpaces1=oneString1.split(" ").join("");
let count5=0;
for(let i=0;i<removeTheSpaces1.length;i++){
if(removeTheSpaces1[i]==="I"){
    count5++;
}
}
console.log(count5);

//All uppercase alphabets count
let oneString3="AHHihsgus uhaHIAhi IIsihiaiISH";
let removeTheSpaces2=oneString3.split(" ").join("");
let allUperCaseCount="";
for(let i=0;i<removeTheSpaces2.length;i++){
    if(removeTheSpaces2[i]==removeTheSpaces2[i].toUpperCase()){
    allUperCaseCount++;
    }
}
console.log(allUperCaseCount);

let stringFive="I am Software Tester and I am Automation Tester"
let stringFiveArray= stringFive.split(" ");
let resultFive=[];
for(let i=0;i<stringFiveArray.length;i++){
let count90=0;
for(let j=0;j<stringFiveArray.length;j++){
    if(stringFiveArray[i]===stringFiveArray[j]){

       count90++;
    }
if(count90==1){
resultFive.push(stringFiveArray[i]);
}

}
}
console.log(resultFive);


//print uppercase laters
let UPPERCASE="HHihIishihiSJSIJIUHshishihi";
let UPPERCASELATERPRINT="";
for(let i=0;i<UPPERCASE.length;i++){
    if(UPPERCASE[i]===UPPERCASE[i].toUpperCase()){
    UPPERCASELATERPRINT=UPPERCASELATERPRINT+UPPERCASE[i];

    }
}
console.log(UPPERCASELATERPRINT);



let String5 = "I am Software Tester and I am Automation tester";

let StringArray = String5.split(" ");
let ResultNine = [];

for (let i = 0; i < StringArray.length; i++) {

    let count21 = 0;

    for (let j = 0; j < StringArray.length; j++) {

        if (StringArray[i] === StringArray[j]) {
            count21++;
        }
    }

    if (count21 === 1) {
        ResultNine.push(StringArray[i]);
    }
}

console.log(ResultNine);
// let div9=document.querySelector("div");
// console.dir(div9);

//const console = require("node:console");

// let value=div.getAttribute("name");//To access the attribute value
// console.dir(value);

// let value1=div.getAttribute("ID");
// console.dir(value1);

// let para=document.querySelector("div");//To access the attribute value
// console.dir(para.getAttribute("name"));
// console.dir(para.getAttribute("ID"));

// let changeAttributeValue=document.querySelector("div");//Set the attribute value
// console.dir(changeAttributeValue.setAttribute("name","Full Name"));

// let setAttributeValue=document.querySelector("div");
// console.log(setAttributeValue.setAttribute("name","Amol Mairale"));
// console.log(setAttributeValue.setAttribute("ID","amol@mairale"));


// let div1=document.querySelector("div");
// console.dir(div1);

let div=document.querySelector("div");
div.style.backgroundColor="orange";
//div.innerText="Hello Mr.Akshay Mairale" ;

//DOM Manipulation:-There are four methods for element creation//append,prepend,Befor and after
//Create new button or heading
let newButton=document.createElement("Button");
newButton.innerText="Login";
newButton.style.backgroundColor="blue";
console.log(newButton);
let btn=document.querySelector("div");
btn.before(newButton);

let logoutButton=document.createElement("Button");
logoutButton.innerText="Logout";
logoutButton.style.backgroundColor="blue";
console.log(logoutButton);
 let btn1=document.querySelector("div");
 btn1.after(logoutButton);

let createdHeading=document.createElement("Heading");//Heading creation
createdHeading.innerHTML="<I>Hello,this is a new Heading </I>";
document.querySelector("body").prepend(createdHeading);

let loginBtncreation=document.createElement("Button");
loginBtncreation.innerText="Click me!";
loginBtncreation.style.backgroundColor="red";
loginBtncreation.style.color="white";
let btnLocation=document.querySelector("div");
btnLocation.prepend(loginBtncreation);

let newHeading=document.createElement("Heading");
newHeading.innerHTML="<B>This is my new Heading Akshay Mairale</B>";
let addHeading=document.querySelector("div");
addHeading.after(newHeading);


//createdHeading.remove()//This method is used for remove the node.
newHeading.remove();//This method is used for remove the node.

let textColor=document.querySelector("p");//Our first class which is given in HTML code
textColor.style.color="blue";
textColor.style.backgroundColor="lightblue";

textColor.classList.add("NewClass");//Add the new class but cannot over ride the first class
textColor.style.color="red";
textColor.style.backgroundColor="lightblue";
textColor.classList.remove("content");//Remove the class 


//print uppercase laters
let UPPERCASE="HHihIishihiS JSIJIUHshishihi";
let UPP=UPPERCASE.split(" ").join("");
let ALLUPPERCASE="";
for(let i=0;i<UPP.length;i++){
    if(UPP[i]==UPP[i].toUpperCase()){
       ALLUPPERCASE=ALLUPPERCASE+UPP[i];
    }
}
console.log(ALLUPPERCASE);

// //All uppercase alphabets count
// let oneString3="AHHihsgus uhaHIAhi IIsihiaiISH";
// let removeTheSpaces2=oneString3.split(" ").join("");
// let allUperCaseCount="";
// for(let i=0;i<removeTheSpaces2.length;i++){
//     if(removeTheSpaces2[i]==removeTheSpaces2[i].toUpperCase()){
//     allUperCaseCount++;
//     }
// }
// console.log(allUperCaseCount);

//Practice of string programs

let input="Playwright Test Automation";
let reverse="";
for(let i=input.length-1;i>=0;--i){
reverse=reverse+input[i];
}
console.log(reverse);

let input1="Playwright Test Automation";
let reverseWord=input1.split(" ");
let result12=[];
for(let i=reverseWord.length-1;i>=0;--i){
    //if(reverseWord[i]!==undefined){
    result12=result12+reverseWord[i]+" ";
    //}
}
console.log(result12);

let input2="Playwright Test Automation";
let UperCaseString=input2.split(" ");
let result13="";
for(let i=0;i<UperCaseString.length;++i){
result13=result13+UperCaseString[i].toUpperCase()+" ";

}
console.log(result13);

let inputString="I Am Manual And Automation Tester";
let conversion=inputString.split("");
let result15="";
for(let i=0;i<inputString.length;++i){
    result15=result15+inputString[i].toLowerCase();
}
console.log(result15);

let inputString1="I Am Manual And Automation Tester";
let conversion1=inputString1.split(" ").join("");
let result16="";
for(let i=0;i<conversion1.length;++i){
    if(conversion1[i]===conversion1[i].toLowerCase())
result16=result16+conversion1[i]+"";
}
console.log(result16);

let STRING="Akshay is very good person";
let access=STRING.split(" ");
let accessElement="";
for(let i=0;i<access.length;i++){
if(access[i]="very"){
accessElement=accessElement+access[i];
break;
}
}
console.log(accessElement);

let STRING112="Akshay is very good person";
let STRINGArray=STRING112.split(" ").join("");
let Stringcount="";
for(let i=0;i<STRINGArray.length;i++){
    if(STRINGArray[i]=STRINGArray[i].toUpperCase){
    Stringcount++;
    break;
}
}
console.log(Stringcount);

let inputString12="AaBbCc";
let output="";
for(let i=0;i<inputString12.length-1;i+=2){
    //if(inputString12[i+3]!=undefined && inputString12[i+2]!=undefined ){
    output=output+inputString12[i+1];
   //break;
    }
//}

console.log(output);

let input33="AaBbCc";
let reult232="";
for(let i=0;i<input33.length-1;i+=2){
    reult232=reult232+input33[i];
}

console.log(reult232);

let capitalString="KHKDH wiqQHWIQiihW IWIQIhkhie WIHiwqii HIWHI";
let joinArray=capitalString.split(" ").join("")
let CountResult="";
for(let i=0;i<joinArray.length;i++){
if(joinArray[i]===joinArray[i].toUpperCase()){
CountResult++;


};
}
console.log(CountResult);

let capitalString1="KHKDH wiqQHWIQiihW IWIQIhkhie WIHiwqii HIWHI";
let joinResult=capitalString.split(" ").join("");
let allCapsPrint="";
for(let i=0;i<joinResult.length;i++){
allCapsPrint=allCapsPrint+joinResult[i].toLowerCase();

}
console.log(allCapsPrint);

let numberArray=[64,48,23,58,98,28,93];
let smallestNumberPrint=numberArray[0];
for(let i=0;i<numberArray.length;i++){
if(numberArray[i]<smallestNumberPrint){
    smallestNumberPrint=numberArray[i];
   
}
}
console.log(smallestNumberPrint);

let numberArray1=[64,48,23,58,98,28,93];
let FIRST=numberArray1[0];
let SECOND=numberArray1[0];
for(let i=0;i<numberArray1.length;i++){
    if(numberArray1[i]>FIRST){
      SECOND=FIRST;
      FIRST=numberArray1[i];
    }
    else if(numberArray1[i]!=FIRST && numberArray1[i]!=SECOND){
      SECOND=numberArray1[i];
    }
}
console.log(SECOND);

// let String5="I am Software Tester and I am Automation tester";
// let StringArray=String5.split(" ");
// let ResultNine=[];
// for(let i=0;i<StringArray.length;i++){
// let count21=0;
// for(let j=0;j<StringArray.length;j++){
//     if(StringArray[i]===StringArray[j]){
//      count21++;

//     }
//     if(count21==0){
// ResultNine.push(StringArray[i])

//     }
// }

// }
// console.log(ResultNine);


let String5 = "I am Software Tester and I am Automation tester";
let StringArray = String5.split(" ");
let ResultNine = [];
for(let i = 0; i< StringArray.length; i++){
if(StringArray[i] === "Software" || StringArray[i] === "Automation"){
       ResultNine.push(StringArray[i]);
}
}
console.log(ResultNine);


let String6 = "I am Software Tester and I am Automation tester";
let StringArray6 = String6.split(" ");
let ResultNine6 = [];
for (let i = 0; i < StringArray6.length; i++) {
    if (StringArray6[i] === "Software" || StringArray6[i] === "Automation") {
        ResultNine6.push(StringArray6[i]);
    }
}
console.log(ResultNine6);   

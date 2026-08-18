
//Events handling:-Event means change in the state of object is known as event.ex mouse, keyboard, form, submit events etc.
// let btn=document.querySelector("Button")
// btn.style.backgroundColor="blue";
// btn.onclick=()=>{
//     console.log("click on the button");
//     let a=25;
//     a++;
//     console.log(a);
//  };
//  //When we use the same code then it can overwrite on first code.
// // let btn1=document.querySelector("Button")
// // btn1.style.backgroundColor="blue";
// // btn1.onclick=()=>{
// //     console.log("click on the button2");
// //     let a=25;
// //     a++;
// //     console.log(a);
// // };

// let div=document.querySelector("div")
// div.innerText="Akshay Mairale";
// div.style.color="red";
// div.onmouseover=()=>{
//     console.log("Akshay Mairale Name Is Printing");
// };
// // Event Object:-It is a special object that has details about the event.
// //All event handlers that have to access event object properties and method. 
// let btn1=document.querySelector("Button")
// btn1.style.backgroundColor="blue";
// btn1.onclick=(e)=>{
//     console.log(e);
//     console.log(e.target);
//  };
// // we can handle the multiple events by addEventListenr method.
//  btn1.addEventListener("click", (e)=> {
//     console.log("Event Handler1");
//     console.log(e);
//     console.log(e.type);
//  });
//  btn1.addEventListener("click", (e)=> {
//     console.log("Event Handler2");
//     console.log(e);
//     console.log(e.type);
//  });
// const handler3=btn1.click=(e)=>{
//     onsole.log("Event Handler3");
//     console.log(e);
//     console.log(e.type);

// }

//  btn1.addEventListener("click", (e)=> {
//     console.log("Event Handler4");
//     console.log(e);
//     console.log(e.type);
//  });

//  btn1.removeEventListener("Click",handler3);//It is used to remove the events


 //Practice question
  
 let btnclr=document.querySelector("Button");
 btnclr.style.backgroundColor="blue";
 let btnMode="Light";

 btnclr.addEventListener("click",()=>{
if(btnMode==="Light"){
    btnMode="Dark";
    btnclr=document.querySelector("body");
    btnclr.style.backgroundColor="black";
}
else{
    btnMode="Light";
    btnclr=document.querySelector("body");
    btnclr.style.backgroundColor="white";

}
console.log(btnMode);
});


let input="I am Automation Tester and I am Manual Tester";
let input1=input.split(" ");
let output=[];
for(let i=0;i<input1.length-1;i++){
    if(input1[i]==="Automation" || input1[i]==="Manual"){
    output=output+input1[i]+" ";
    }
}
console.log(output);


let ARRAY=[39,38,28,48,72,99,29];
let largesttValue=ARRAY[0];
let secondLargetValue=ARRAY[0];
for(let i=0;i<ARRAY.length;i++){
if(ARRAY[i]>smallestValue){
    secondLargetValue=largesttValue;
    largesttValue=ARRAY[i];
}
    else if(ARRAY[i]===secondLargetValue && ARRAY[i]!==secondLargetValue){
secondLargetValue=ARRAY[i];

    }
}


 console.log(secondLargetValue);


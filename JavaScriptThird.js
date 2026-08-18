
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

let sum = 0;
let n1;
for (let n1 = 0; n1 <= 8; n1++) {
    sum = sum + n1;
}
console.log(sum);


let i = 1;
while (i <= 5) {
    console.log("Akshay Mairale");
    i++;
}


//for of loop which is use in only string and arrays, map and set
let string = "JavaScriptLearning";
let size = 0;
for (let value of string) {
    console.log("value", value);
    size++;
}
console.log("size", size);



let str = "Akshay Mairale";
let size1 = 0;
for (let val of str) {
    console.log("Val", val);
    size1++;
}
console.log(size1);


//for in loop which is used to Arrays and Objects

let student = {
    name: "Akshay Mairale",
    age: 30,
    cgpa: 8.3,
    isPass: true,
};
for (let key in student) {
    console.log("Key=", key, "value=", student[key]);
}

let stdnt = {
    name: "Akshay Mairale",
    age: 30,

}
for (let key22 in stdnt) {
    console.log("Key", key22, "value", stdnt[key22]);
}

let student1 = {
    name: "AKSHAY ABHIMAN MAIRALE",
    age: 30,
    address: "Zenda Bazar Vasai west",
    Designation: "QA Engineer",
    salary: 20000,
};
for (let key1 in student1) {
    console.log("Key=", key1, "value=,", student1[key1]);
}

let Salary = {
    name2: "Akshay Mairale",
    salary: 20000,
    name2: "Amol Mairale",
    salary: 10000,
}
for (let key2 in Salary) {
    console.log("Key2=", key2, "value=", Salary[key2]);
}



for (let number = 0; number >= 10; number++) {
    if (number % 2 == 0) {
        console.log(number);
    }
}
// let game=25;
// //UserNumber=23;
// let UserNumber=prompt("Enter the first game number");
// if(UserNumber!=game){
//     game=prompt("Enter the second game number");
//     console.log("This game does not exist");
// }
// else{
//     console.log("This game number exist");
// }

//String: It's characters to represent the text.
let String = "Hello Mr.Akshay";
console.log(String);

//String.lenght used in console then how many characters are present it has to calculate.
console.log(String.length);

//String[9] used to print the single character.
console.log(String[9]);

//Literal template(SpecialString): It is used for used the multiple characters in single string

let student2 = {
    name: "AKSHAY ABHIMAN MAIRALE",
    age: 30,
    address: "Zenda Bazar Vasai west",
    Designation: "QA Engineer",
    salary: 20000,
};
console.log("Name:", student2.name, "Age:", student2.age, "Address:", student2.address, "Salary:", student2.salary);
let output = `Name:${student2.name} Age:${student2.age}`;//template String or spacial string
console.log(output);
// let Uppercasestr=output.toUpperCase();

//  \n:It is used to print on next line

let output1 = `Name:${student2.name}\nAge:${student2.age}`;//template String or spacial string
console.log(output1);

let akm = "Akshay\nMairale";
console.log(akm);

//  \t:It is used to space on same line
let akm1 = "Akshay\tMairale";
console.log(akm1);

//String Methods in JS
//str.toUpperCase();It is used to create the new string and convert string in Uppercase.
let str9 = "Akshay Mairale"
console.log(str9);
let newstr9 = str9.toUpperCase();
console.log(newstr9);

let stringg = "Touras";
console.log(stringg);
let newstringg = stringg.toUpperCase();
console.log(newstringg);
let newstringg1 = newstringg.toLowerCase();
console.log(newstringg1);
stringg.split(" ");
console.log(newstringg1);


let strx = "Touras";

function spacestrx(strx) {
    return strx.split("")
}
console.log(spacestrx(strx))



//str.toUpperCase();It is used to create the new string and convert string in lowercase.
let str10 = "AKSHAY MAIRALE"
console.log(str10);
let newstr10 = str10.toLowerCase();
console.log(newstr10);

//str.trim(); It is used to remove starting and ending whitespaces from a string.

let normalStr = "   Akshay Mairale    ";
console.log(normalStr);
let removewhitespaces = normalStr.trim();
console.log(removewhitespaces);

//str.Slice();
let str5 = "AkshayMairale";
console.log(str5);
let Slicecut = str5.slice(1, 5);
console.log(Slicecut);


//str.concat(); combine two strings
let Ak1 = "Akshay1";
let Ak2 = "Akshay2";
console.log(Ak1.concat([Ak2]));

//CharAt() used to print the index value.
let a = "Akshay Mairale";
let b = a.charAt([7]);
console.log(b);

//str.replace(); replace the character or sentence

let s = "Akshay Mairale";
s = s.replace("Akshay", "Amol");
console.log(s);

let fullName = prompt("Enter your Name");
let userName = fullName.replace(" ", "");
//UserFullName =UserFirstName.concat(UserSecondName);
console.log(userName);
let lowerCaseFullName = userName.toLowerCase();
console.log(lowerCaseFullName);
console.log(lowerCaseFullName + lowerCaseFullName.length + "@" + "gmail.com");



//let btnCreationOnPopup=prompt("Click on the Login Button");
let btn = document.createElement("Button");
btn.innerText = "Login";
btn.style.backgroundColor = "blue";
btn.style.color = "white";
let btnOnHTML = document.querySelector("div");
btnOnHTML.before(btn);



let akshay={
     A:"Akshay Mairale",
     B:"Banty",
     C: 25,
}
console.log(akshay["C"]);
akshay["C"]=akshay["C"]+8;
console.log(akshay["C"]);
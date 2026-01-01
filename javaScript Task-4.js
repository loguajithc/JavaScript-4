//1.
var username=prompt(" username:");
username =username.trim().toLowerCase();
console.log("username:"+username);

//2.
let email= prompt("email:");
if (email.includes("@")&&email.includes(".")) {
  console.log("Valid Email");
} else{
  console.log("Invalid Email");
}

//3
let sentence =prompt("Enter a sentence:");
let count=0;
for(let ch of sentence) {
  if(ch !=="")count++;
}
console.log("Total characters(no spaces):"+count);

//4.
let paragraph=prompt("paragraph:");
let words=paragraph.trim().split(/\s+/);
console.log("Word count:"+(paragraph.trim() ===""? 0: words.length));

//5.
var str= prompt("string:");
if(str.length>0) {
  console.log("First:"+str[0] +"| Last:"+str[str.length- 1]);
} else{
  console.log("Empty string");
}

// 6.
var sen =prompt("sentence:");
var oldWord= prompt("replace:");
var newWord = prompt("Replace with:");
console.log("Updated:"+ sen.replace(oldWord,newWord));

//7.
var text =prompt("Enter text:");
if(text.length <5 ||text.length >20)
else console.log("Accepted");

// 8
let s=prompt("Enter text:");
let up=0;
for (let ch of s) {
  if (ch>="A"&&ch<="Z")up++;
}
console.log("Uppercase letters:"+ up);

//9)
var input = prompt("characters:");
var clean ="";
for (let ch of input) {
  if((ch>="A"&&ch<="Z")||(ch>="a"&&ch<="z")||(ch>="0"&&ch<="9") || ch === " ") {
    clean +=ch;
  }
}
console.log("Clean string:"+clean);

//10
let t=prompt("string:");
let start=prompt("Check starts with:");
let end=prompt("Check ends with:");
console.log("Starts with? "+ t.startsWith(start) +"\nEnds with?" + t.endsWith(end));

//11. 
let longSentence= prompt("sentence:");
let splitWords =longSentence.trim().split(/\s+/);
let longest ="";
for (let w of splitWords)
if (w.length > longest.length) longest = w;
console.Log("Longest word: " + longest);

// 12
let titleSentence= prompt("sentence:");
let parts =titleSentence.toLowerCase().split(/\s+/);
for (let i=0;i<parts.length; i++) {
  if(parts[i])parts[i]=parts[i][0].toUpperCase()+parts[i].slice(1);
}
console.log("Title Case: " + parts.join(" "));

// 13.
let mobile=prompt("Enter mobile number:");
let masked="*".repeat(Math.max(0, mobile.length-4))+ mobile.slice(-4);
console.log("Masked: "+masked);

//14/
let repStr= prompt("Enter a string:");
let seen ={};
let repeated=[];
for(let ch of repStr) {
  if(seen[ch]) {
    if(!repeated.includes(ch))repeated.push(ch);
  } else{
    seen[ch]=true;
  }
}
console.log("Repeated characters:"+(repeated.length ?repeated.join(","):"None"));

// 15
let vcStr=prompt("Enter a string:");
let vowels="aeiouAEIOU";
let v =0,c=0;
for (let ch of vcStr) {
  if (/[a-zA-Z]/.test(ch)) {
    if (vowels.includes(ch)) v++;
    else c++;
  }
}
console.log("Vowels:"+v +"|Consonants:"+ c);

//16
var dupSentence= prompt("Enter a sentence:");
var arr=dupSentence.trim().split(/\s+/);
var unique=[];
for(let w of arr) 
if (!unique.includes(w)) unique.push(w);
console.log("Without duplicates:" + unique.join(" "));

// 17
var a1=prompt("" first string:").replace(/\s+/g,"").toLowerCase();
var a2=prompt("second string:").replace(/\s+/g,"").toLowerCase();
var sort1= a1.split("").sort().join("");
var sort2 =a2.split("").sort().join("");
console.log(sort1===sort2?"Anagram":"Not anagram");

// 18
let c1 =prompt("first string:");
let c2= prompt("second string:");
console.log(c1.trim()===c2.trim()? "Equal":"Not equal");

//19.
var mix = prompt("letters + numbers:");
var nums="";
for (var ch of mix) 
if(ch>= "0"&&ch<="9")nums+= ch;
console.log("Numbers: "+(nums|| "None"));

// 20
let pwd =prompt("Enter password:");
let hasNum= /[0-9]/.test(pwd);
let hasUpper= /[A-Z]/.test(pwd);
if(pwd.length>=8&& hasNum && hasUpper)
console.log("Strong password");
else 
console.log("Weak password");

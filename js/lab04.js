
'use strict' ;
alert("Hello, you are attended to view a very secret information about me");
alert("Before that i had to test if you are accepted to view it or not");
alert("Okay, lets go");

var userName = prompt("Type your name");
  while (userName === "") {
  alert('Please type a name in the field!')
var userName = prompt("Type in your name");
} 
var rank=0;
alert('Hello ' + userName);
alert('Now just answer with yes or no okey  '+userName+'?');
function q1(){
var clear = prompt("Is it clear?").toLowerCase();
if ((clear === "yes") ||(clear === "y")){
  alert('Thats good!')
  // console.log("clear=yes")
  rank=rank+1  
} else {
  alert('You are not allowed to access to this secret information, you will be redirected to a site that match your brain size!! have fun (: ' + userName);
  window.open("https://www.youtube.com/watch?v=XqZsoesa55w",'_blank');
  // console.log("clear=",clear)
}
} q1();


function q2(){
var age = prompt("Are you 18 year old or above").toLowerCase();

if ((age === "yes") ||(age === "y")) {
  alert('Nice!!')
  // console.log("age=yes")
  rank=rank+1 
} else {
  alert('You are not allowed to access to this secret information, you will be redirected to a site that match your brain age!! have fun (: ' + userName);
  window.open("https://toyoraljanah.com/",'_blank');
  // console.log("age=",age)
}
alert('Keep going, just 5 more questions! (:');

} q2();



function q3(){
var secrets = prompt("Can you keep secrets as a secrets").toLowerCase();

if ((secrets === "yes") ||(secrets === "y")) {
  alert("Nice!! I'll trust you :)")
  // console.log("secrets=yes")
  rank=rank+1 
} else {
  alert('You need to know about discloses secrets disadvantage, ' + userName);
  window.open("https://islamqa.info/en/answers/27190/what-is-the-ruling-on-one-who-discloses-secrets",'_blank');
  // console.log("secrets=",secrets)
}
alert('Excelente, just 4 more questions! (:');

} q3();


function q4(){
var enjoy = prompt("Are you enjoying chating with me").toLowerCase();

if ((enjoy === "yes") ||(enjoy === "y")){
  
  alert("Seems like you are feeling lonely :`(")
  alert("I think you need to see a psychiatrist, do not worry it is not a shame :)")
  // console.log("enjoy=yes")
  rank=rank+1 
} else {
  alert('You are all about sadness ' + userName);
  window.open("https://www.youtube.com/watch?v=qYS0EeaAUMw",'_blank');
  // console.log("enjoy=",enjoy)
}

alert("Excelente, just 3 more questions! (:");
}  q4();

function q5(){

var donate = prompt("Did you accept to pay 99999999$ for this secret information").toLowerCase();

if ((donate === "yes") ||(donate === "y")) {

  alert('You can send the money using this link `www.blablabla.money`')
  alert('Excelente, just 2 more questions! (:')
  // console.log("donate=yes")
  rank=rank+1 
} else {
  alert('You are so mean :`( ' + userName);
  window.open("https://www.youtube.com/watch?v=QhfrhyHOstg",'_blank');
  // console.log("donate=",donate)
}
}q5();



function q6(){

for ( var i = 0; i < 4;) {
 //console.log(i);
 var age1 = prompt("Can you guss my age its between 20 and 30");
 var age = Number(age1)  
 //console.log(age);  
 //console.log(i);
if (age === 25) {
    alert('Thats right(:) ');   
  i=7
// console.log("age=yes")
  rank=rank+1 
} else if ((25<age) && (age <=27)){
  alert('hot ');
  i=i+1
} else if ((25>age) && (age >=23)){
    alert('hot ');  
  i=i+1
} else if ((30>=age) && (age>27)) {
  alert('cold ');  
  i=i+1
} else if ((23>age) && (age>=20)) {
    alert('cold '); 
  i=i+1
} else {
    alert ('Concentrate! its between 20 and 30')
  i=i+1
}
//console.log(i);
}
alert('It`s 25 (:');
}q6();

function q7(){

alert('Can you guess one of my hobby, choose between: Swimming, eating, dancing, reading, racing')
var hobby =['swimming', 'play video games', 'eating','fighting','sleeping']
for(var k =0 ; k < 6;k++){ 
  var Guess = prompt("Guess my hobby").toLowerCase();
  var alert1 = 'try again' 
     
  for(var n = 0; n < hobby.length ; n = n+1)
  {
  
    if (hobby[n]===Guess)
    {
      //console.log("finaly")
      k=6
      n=hobby.length
      alert1= 'congratulation '+ userName + ' you made it :)'
      rank=rank+1 
     // break  //no need for "break"
    }
    else
    {
      //console.log('No try Again !');
    }
  }

    alert(alert1)
}
alert('Your rank = '+rank+' out of the 7' )
}q7();


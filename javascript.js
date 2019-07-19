var day =  prompt("What is ur date of birth?");
var month =  prompt("What is ur month of birth?");
var year =  prompt("What is ur year of birth?");
var gender =  prompt("What is ur gender?");
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw" , "Kof", "Kwame"]
function birthdate() {
 var d = parseFloat(document.getElementById('day').value);
 var m = parseFloat(document.getElementById('month').value);
 var y = parseFloat(document.getElementById('year').value);
 var c = (y - 1) / 100 + 1;
 var dayoftheweek = (c / 4 - 2 * c - 1 + 5 * y / 4 + 26 * (m + 1) / 10 + d) % 7;
 console.log(dayoftheweek);
 console.log(dayoftheweek);
 document.getElementById('result').innerHTML = Math.round(dayoftheweek);
var choice = document.getElementById('select').value;

 if (choice === "male") {
     console.log(gabo[Math.round(dayoftheweek)]);

     document.getElementById('akan').innerHTML = gabo[Math.round(dayoftheweek)];





 } else if (choice === "female") {





     console.log(gore[Math.round(dayoftheweek)]);
     document.getElementById('akan').innerHTML = gore[Math.round(dayoftheweek)];
 } else {
     console.log("invalid outuput");
 }
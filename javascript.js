function birthdates() {
 var d = parseFloat(document.getElementById('day').value);
 var m = parseFloat(document.getElementById('month').value);
 var y = parseFloat(document.getElementById('year').value);
 var c = (y - 1) / 100 + 1;
 var dayoftheweek = (c / 4 - 2 * c - 1 + 5 * y / 4 + 26 * (m + 1) / 10 + d) % 7;
 var day=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
 console.log(dayoftheweek);
 document.getElementById('result').innerHTML = day[Math.round(dayoftheweek)];
 var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw" , "Kof", "Kwame"];
var female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var choice = document.querySelector("input[name='gender']:checked").value;
if ((d>31) && (d>1)){
    alert("This day doesn't exist");
}
if ((m>12) && (m<1)){
    alert("This month doesn't exist");
}
if ((y>2019) && (y<1)){
    alert("this year doesn't exist");
}
 if (choice === "male") {
     console.log(male[Math.round(dayoftheweek)]);
     document.getElementById('Akan').innerHTML = male[Math.round(dayoftheweek)];
 } 
 else if (choice === "female") {
    console.log(female[Math.round(dayoftheweek)]);
     document.getElementById('Akan').innerHTML = female[Math.round(dayoftheweek)];
 } 
 else {
     console.log("invalid outuput");
 }
}
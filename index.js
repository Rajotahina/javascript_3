var nameInput = document.getElementById("nameInput");
var firstInput = document.getElementById("firstInput");
var ageInput = document.getElementById("ageInput");
var birthInput = document.getElementById("birth");
var numberPhone = document.getElementById("numberPhone");
var nameInfo = document.getElementById("nameInfo");
var firstInfo = document.getElementById("firstInfo");
var ageInfo = document.getElementById("ageInfo");
 var dateInfo = document.getElementById("dateInfo");
numberPhoneInfo = document.getElementById("numberPhoneInfo");


 nameInput.onchange =function() {
    var nameInputValue = nameInput.value;
    nameInfo.innerHTML = nameInputValue;
 }

 firstInput.onchange =function() {
    var firstInputValue = firstInput.value;
    firstInfo.innerHTML = firstInputValue;
 }

 ageInput.onchange =function() {
    var ageInputValue = ageInput.value;
    ageInfo.innerHTML = ageInputValue;
 }
 
 birthInput.onchange =function() {
    var birthInputValue = birthInput.value;
    dateInfo.innerHTML = birthInputValue;
 }
 numberPhone.onchange =function() {
    var numberPhoneValue = numberPhone.value;
    numberPhoneInfo.innerHTML = numberPhoneValue;

 }
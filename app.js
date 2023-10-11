
alert("Hi! Welcome to My Page. ")

// alert("Welcome to JS land... \n Happy Coding!")

// alert('Welcome to JS Land...')

// alert('Happy Coding! \n Prevent this page from creating additional dialogs')




function showAlert() {

    var Question2 = document.getElementById("Question-2");
    var Question3 = document.getElementById("Question-3");


    if (Question2.checked) {
        alert("Welcome to JS land... \n Happy Coding!")
    } else if (Question3.checked) {
        alert('Welcome to JS land...')
        alert('Happy Coding! \n Prevent this page from creating additional dialogs')
    }
    else {
        alert('Error! Please check the question box and see their answer');
    }
};

// CHaper No 2 String Variables

// for print in alert box
// var studentName = "Syed Nadeem Ali";
// var fatherName = "Abdul Hakeem";
// var age = "30 Year";
// var phoneNumber = '03128892462';
// var email = 'syednadeemali221@gmail.com';



// alert("Name :" + " " + studentName);
// alert("Fahter Name :" + " " + fatherName);
// alert('Age :' + " " + age);
// alert('Mobile :' +  " " + phoneNumber);
// alert('Email :' + email);


// funxtion for print in html 
window.addEventListener('load', function () {
    var studentName = "Syed Nadeem Ali";
    var fatherName = 'ABdul Hakeem';
    var age = "30 Year"
    var email = "syednadeemali221@gmail.com"
    var phoneNumber = '03128892462';



    console.log("Name :" + " " + studentName);
    console.log("Fahter Name :" + " " + fatherName);
    console.log('Age :' + " " + age);
    console.log('Mobile :' + " " + phoneNumber);
    console.log('Email :' + email);

    document.querySelector("#name").innerHTML = studentName;
    document.querySelector("#fName").innerHTML = fatherName;
    document.querySelector("#age").innerHTML = age;
    document.querySelector("#phone").innerHTML = phoneNumber;
    document.querySelector("#email").innerHTML = email;

});


// question 5


// function for print in alert box
var pizza = "pizza\npizz\npiz\npi\np";

alert(pizza);

// function for print in console
console.log(pizza);
// function for print in html
var pizza = document.getElementById("pizza");

document.querySelector("#pizza").innerHTML = "pizza<br>pizz<br>piz<br>pi<br>p";

var question6 = "syednadeemali221@gmail.com";

alert("My email address is" + " " + question6);

var question7 = "A Smarter Way to learn javaScript"

alert("I am Trying to Learn" + " " + question7);

var question9 = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
alert(question9);

// function for print in HTML
document.querySelector("#q-6").innerHTML = ` My email address is  ${question6}`;
document.querySelector("#q-7").innerHTML = `i am trying to learn ${question7}`;
document.querySelector("#q-8").innerHTML = "Yeah! I can write HTML content through javaScript";
document.querySelector("#q-9").innerHTML = question9;


// CHapter 3 
// Question 1

var age = 30;

alert("I am " + " " + age + " " + " year old")

document.querySelector("#chp-3-q-1").innerHTML = `I am ${age} year old`;


// Question 2

// Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.

function getVisitorCount() {
    if (localStorage.getItem('visitorCount')) {
        let count = parseInt(localStorage.getItem('visitorCount')) + 1;
        localStorage.setItem('visitorCount', count);
        return count;

    } else {
        localStorage.setItem('visitorCount', 1);
        return 1;
    }

}

const visitCount = getVisitorCount();
document.querySelector("#visit-count").innerHTML = `You have visited this site ${visitCount} time(s).`;

var birthYear = 1991;
alert("My birth Year is " + " " + birthYear+"\n Data type of my declare vairable is Number" )

document.querySelector("#chp-3-q-3").innerHTML = `My birth Year is ${birthYear} <br> Data Type of my declare element is number`

var visitorName = prompt("Please enter your name:");
var productTitle = prompt('Would you like to order');
var quantity = prompt("How many " + productTitle + "(s) would you like to order?");

var message = visitorName + " ordered " + quantity + " " + productTitle + "(s) on NadeemElectronic store.";
console.log(message);

document.querySelector('#chp-3-q-4').innerHTML = message;

// Chapter 4

var vairable1 , variable2 , variable3;

// legal variables name

var myName;
var $myName;
var _myName;
var camelCaseMyName;
var name123;


// Illegal variable name
// Note: these variables name not working in javascript

// var 123MyName; // you can not make variable using number in start
// var my-Name; // you can not make variable using (-)
// var my Name; // you can not make variable using space between variable name
// var my&Name; // you can not make variable using special character etc (& * # )
// var break; // you can not make variable using reserve key word


document.querySelector('#rules').innerHTML = ('Rules for naming JS variables');

var optA = "number, letter, $ and _"
var optB = "letter, $ or _"
var optC = "Sensitive"
var optD = "KeyWord"

document.querySelector("#opt-a").innerHTML= ('b) Variable names can only contain' +" " + optA + ".For example: &my_1stVariable")
document.querySelector("#opt-b").innerHTML= ('c) Variables must begin with a' +" " + optB + ".For example: $name, _name or name")
document.querySelector("#opt-c").innerHTML= ('d) Variable names are case' + " " + optC)
document.querySelector("#opt-d").innerHTML= ('e) Variable names should not be JS' + " " + optD)
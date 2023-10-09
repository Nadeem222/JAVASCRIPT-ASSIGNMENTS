
alert("Hi! Welcome to My Page. ")

// alert("Welcome to JS land... \n Happy Coding!")

// alert('Welcome to JS Land...')

// alert('Happy Coding! \n Prevent this page from creating additional dialogs')




function showAlert() {
    
    var Question2 = document.getElementById("Question-2");
    var Question3 = document.getElementById("Question-3");
    
    
    if(Question2.checked){
        alert("Welcome to JS land... \n Happy Coding!")
    }else if(Question3.checked){
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
window.addEventListener('load', function() {
    var studentName = document.getElementById('name');
    var fatherName = document.getElementById('fName');
    var age = document.getElementById('age');
    var phoneNumber = document.getElementById('phone');
    var email = document.getElementById('email');

    document.querySelector("#name").innerHTML = "Syed Nadeem Ali"
    fatherName.textContent = "Abdul Hakeem";
    age.textContent = "30";
    phoneNumber.textContent = "0312-8892462";
    email.textContent = "syednadeemali221@gmail.com";

});
// function for print in console
    var studentName = "Syed Nadeem Ali";
    var fatherName = 'ABdul Hakeem';
    var age = "30 Year"
    var email = "syednadeemali221@gmail.com"
    var phoneNumber = '03128892462';

    

    console.log("Name :" + " " + studentName);
    console.log("Fahter Name :" + " " + fatherName);
    console.log('Age :' + " " + age);
    console.log('Mobile :' +  " " + phoneNumber);
    console.log('Email :' + email);


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

alert("I am Trying to Learn" + question7);

var question9 = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
alert(question9);

// function for print in HTML
document.querySelector("#q-6").innerHTML = ` My email address is  ${question6}`;
document.querySelector("#q-7").innerHTML = `i am trying to learn ${question7}`;
document.querySelector("#q-8").innerHTML = "Yeah! I can write HTML content through javaScript";
document.querySelector("#q-9").innerHTML = question9;





// //<<<<<<<-----------question -1---------->>>>>>>
// //write a program to show an alert
// let inf=alert("this is a alert")






// //<<<<<<<-----------question -2---------->>>>>>>
// //return a boolean value
// //set-1

// let wed=4>5;
// console.log(wed);
// document.write(wed)
// //that expresion is result a false

// // set-2
// let frt="apple">"pineapple"
// console.log(frt);
// document.write(frt)


// //set-3
// let num="2">"12"
// console.log(num);
// document.write(num)



// //set-4
// let und=undefined==null
// console.log(und);



// // set-5
// let ext=undefined===null
// console.log(ext);


// //set-6
// let arith=null===+"\n0\n"
// console.log(arith);



// //<<<<<<<-----------question -3---------->>>>>>>
// "use strict";
// if ("0") {
//     alert("heloo")
// }


// //<<<<<<<-----------question -4---------->>>>>>>
// alert( null || 2 || undefined );


// //<<<<<<<-----------question -5---------->>>>>>>
// function checkAge(age) {
//     return(age>18)?true:confirm('did parents allow you')
// }
//         function checkAge(age) {
//             return (age > 18) || confirm('Did parents allow you?');
//         }



// //<<<<<<<-----------question -6---------->>>>>>>
// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
//   }

//   ask(
//     "Do you agree?",
//     function() { alert("You agreed."); },
//     function() { alert("You canceled the execution."); }
//   );



// //<<<<<<<-----------question -7---------->>>>>>>
// var user= {
//     firstName: "John",
//     surname: "Doe",
//   };

//   user.firstName.value = "pete";
//   delete  user.firstName;


// //<<<<<<<-----------question -8---------->>>>>>>
// let fruits = ["Apples", "Pear", "Orange"];
// fruitsCopy = [];

// for (i = 0; i < fruits.length; i++) {
//   fruitsCopy[i] = fruits[i];
// }

// fruitsCopy.push('Mango');

// let shoppingCart = fruits;

// shoppingCart.push('Banana');

// console.log( fruits , shoppingCart , fruitsCopy);
// alert(fruits.lenght);

// //<<<<<<<-----------question -9---------->>>>>>>



// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };
// let users = [john, pete, mary];
// let names = users.map(name);
// function name(item){
//   return [item.name].join("");
// }
// console.log(names);
// alert(names)



// //<<<<<<<-----------question -10---------->>>>>>>
// let ram = { name: "ram", surname: "chandra", id: 1 };
// let laxman = { name: "laxman", surname: "chandraa", id: 2 };
// let krish = { name: "krish", surname: "vasaudev", id: 3 };

// let usersa = [ ram, laxman, krish ];

// let usersMapped = usersa.map(usera => ({
//   fullName: `${usera.name} ${usera.surname}`,
//   id: usera.id
// }));

// alert( usersMapped[0].id ); // 1
// alert( usersMapped[0].fullName ); // ram chandra



// //<<<<<<<-----------question -11---------->>>>>>>
// let salaries = {
//     John: 100,
//     Pete: 300,
//     Mary: 250,
//   };
//   const ss = Object.values(salaries);

//   function sumSalaries(ss) {
//       let sum =0;


//         for (const item of ss) {
//             sum+=item
//         }
//         alert(sum);
//   }

//   sumSalaries(ss)

// //<<<<<<<-----------question -12---------->>>>>>>
// var que = {
//     name: "John",
//     years: 30
//   };

//   var {name, years: age, isAdmin = false} = que;

//   alert( name ); // John
//   alert( age ); // 30
//   alert( isAdmin ); // false



// //<<<<<<<-----------question -13---------->>>>>>>
// //pending     !!!!!!!!!!!!!

// //<<<<<<<-----------question -14---------->>>>>>>

// function myFunction() {
//     var x = document.getElementById("myInput");
//     if (x.type === "password") {
//       x.type = "text";
//     } else {
//       x.type = "password";
//     }
//   }




// //<<<<<<<-----------question -15---------->>>>>>>
// const buttonsContainer = document.getElementById("buttonsContainer");

// for (var i = 0; i < 5; i++) {
//     const button = document.createElement("button");
//     button.innerText = i;
//     button.addEventListener("click", function () {
//         console.log(i)
//     })
//     buttonsContainer.appendChild(button);
// }






// //<<<<<<<-----------question -16---------->>>>>>>
// function header_adj() {
//     if ($(window).width() < 767) {
//         var header_height = $(".header").outerHeight();
//         $(".nav-wrap .nav-list").css({ "padding-top": header_height + "px" });
//     } else {
//         $(".nav-wrap .nav-list").css({ "padding-top": "0" });
//     }
// }
// function submenu_toggle() {
//     if ($(window).width() < 767) {
//         $(".nav-list li.with-submenu")
//             .off()
//             .click(function () {
//                 $(this).toggleClass("is-open");
//                 $(".submenu").slideToggle("slow");
//             });
//     }
// }
// $(document).ready(function () {
//     header_adj();
//     submenu_toggle();
//     if ($(window).width() < 767) {
//         $(".hamburger").click(function () {
//             $(this).toggleClass("is-active");
//             $("body,html").toggleClass("sidebar-open");
//             $(".nav-wrap").toggleClass("is-open");
//         });

//         $(".overlay").click(function () {
//             $(".hamburger").removeClass("is-active");
//             $("body,html").removeClass("sidebar-open");
//             $(".nav-wrap").removeClass("is-open");
//         });
//     } else {
//         $(".hamburger").removeClass("is-active");
//         $("body,html").removeClass("sidebar-open");
//         $(".nav-wrap").removeClass("is-open");
//     }
// });
// $(window).on("resize", function () {
//     header_adj();
//     submenu_toggle();
//     if ($(window).width() < 767) {
//         $(".hamburger").click(function () {
//             $(this).toggleClass("is-active");
//             $("body,html").toggleClass("sidebar-open");
//             $(".nav-wrap").toggleClass("is-open");
//         });
// $(".overlay").click(function () {
//             $(".hamburger").removeClass("is-active");
//             $("body,html").removeClass("sidebar-open");
//             $(".nav-wrap").removeClass("is-open");
//         });
//     } else {
//         $(".hamburger").removeClass("is-active");
//         $("body,html").removeClass("sidebar-open");
//         $(".nav-wrap").removeClass("is-open");
//     }
// });

//<<<<<<<-----------question -17---------->>>>>>>

// var user= document.getElementById('firstname');
// var userLast = document.getElementById('lastname');
// var emailId = document.getElementById('email');
// var tele = document.getElementById('mobile');
// var ad = document.getElementById('address');
// var town = document.getElementById('city');
// var states = document.getElementById('state');
// var pCode = document.getElementById('pin');
// var psw = document.getElementById('password');

// user.addEventListener('blur', checkName);
// userLast.addEventListener('blur', checkLname);
// emailId.addEventListener('blur', checkEmail);
// tele.addEventListener('blur', checkTel);
// ad.addEventListener('blur', checkAd);
// town.addEventListener('blur', checkTown);
// pCode.addEventListener('blur', checkPin);
// states.addEventListener('blur', checkState);
// psw.addEventListener('blur', checkPSW);
// function checkName() { 
//     var uName = user.value.trim();
//     if (uName == '') {
//         document.getElementById('firstNameCheck').innerHTML = "** Enter your name please..."
//         return false;
//     }
//     var exp = /^[A-Za-z]{3,6}$/;
//     if (!exp.test(uName)) {
//         document.getElementById('firstNameCheck').innerHTML = "** Only Alphabets, Numbers and Underscore and between 3 to 10 characters."
//     }
//     else{
//         document.getElementById('firstNameCheck').innerHTML = ""
//     }

//     return true;
// }
// function checkLname(){
//     var lName = userLast.value.trim();
//     if (lName == '') {
//         document.getElementById('lastNameCheck').innerHTML = "** Enter your last name please..."
//         return false;
//     }
//     var exp = /^[A-Za-z]{3,6}$/;
//     if (!exp.test(lName)) {
//         document.getElementById('lastNameCheck').innerHTML = "** Only Alphabets, Numbers and Underscore and between 3 to 10 characters."
//     }  else{
//         document.getElementById('lastNameCheck').innerHTML = ""
//     }
//     return true;
// }
// function checkEmail(){
//     var e_mail = emailId.value.trim();
//     if (e_mail == '') {
//         document.getElementById('emailCheck').innerHTML = "** Enter your valid email address..."
//         return false;
//     }
//     var exp =/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//     if (!exp.test(e_mail)) {
//         document.getElementById('emailCheck').innerHTML = "** invalid email"
//     }  else{
//         document.getElementById('emailCheck').innerHTML = ""
//     }
//     return true;
// }
// function checkTel(){
//     var telephone = tele.value.trim();
//     if (telephone == '') {
//         document.getElementById('mobileCheck').innerHTML = "** Enter your phone number..."
//         return false;
//     };
//     var exp =/^[6789]{1}[0-9]{9}$/;
//     if (!exp.test(telephone)) {
//         document.getElementById('mobileCheck').innerHTML = "**invalid mobile number..."
//     }  else{
//         document.getElementById('mobileCheck').innerHTML = ""
//     }
//     return true;
// }
// function checkAd(){
//     var ads = ad.value.trim();
//     if (ads == '') {
//         document.getElementById('addressCheck').innerHTML = "** Enter your address..."

//         return false;
//     }
//     var exp = /^[A-Za-z0-9]{8,}$/;
//     if (!exp.test(ads)) {
//         document.getElementById('addressCheck').innerHTML = "** invalid address"
//     }else{
//         document.getElementById('addressCheck').innerHTML = "";
//     }
//     return true;
// }
// function checkTown(){
//     var tw = town.value.trim();
//     if (tw== '') {
//         document.getElementById('cityCheck').innerHTML = "** Enter your city name..."
//         return false;
//     }
//     var exp = /^[A-Za-z]{2,}$/;
//     if(!exp.test(tw)){
//         document.getElementById('cityCheck').innerHTML = "invalid city name..."
//     }else{
//         document.getElementById('cityCheck').innerHTML = ""
//     }
//     return true;    
// }
// function checkPin(){
//     var code = pCode.value.trim();
//     if (code == '') {
//         document.getElementById('pinCheck').innerHTML = "** Enter your are pincode..."
//         return false;
//     }
//     var exp =/^[1-9][0-9]{5}$/ ;
//     if (!exp.test(code)) {
//         document.getElementById('pinCheck').innerHTML = "** invalid pin"
//     }  else{
//         document.getElementById('pinCheck').innerHTML = ""
//     }
//     return true;
// }
// function checkState(){
//     var st = states.value.trim();
//     if (st == '') {
//         document.getElementById('stateCheck').innerHTML = "** Enter your state..."
//         return false;
//     }
//     var exp = /^[A_Za-z]{3,}$/
//     if(!exp.test(st)){
//         document.getElementById('stateCheck').innerHTML = "**invalid input..."
//     }else{
//         document.getElementById('stateCheck').innerHTML = ""   
//     }
//     return true;
// }
// function checkPSW(){
//     var pwd = psw.value.trim();
//     if (pwd == '') {
//         document.getElementById('pswCheck').innerHTML = "** Enter your password..."
//         return false;
//     }
//     var exp =/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
//     if (!exp.test(pwd)) {
//         document.getElementById('pswCheck').innerHTML = "** Only Alphabets, Numbers and Underscore and between 3 to 10 characters."
//         return false;
//     }  else{
//         document.getElementById('pswCheck').innerHTML = ""
//     }
//     return true;
// }
// function validation(){
//     var inputs = document.getElementsByTagName("input");
//     console.log(inputs);
//     for(var i=0; i < inputs.length; i++){
//         if(inputs[i].value === '' && inputs[i].hasAttribute('required')){
//           alert('There are some required fields!');
//           return false;
//         }
//       }
//       form.submit()
// }




// //<<<<<<<-----------question -18---------->>>>>>>
//   // Get the modal
//   var modal = document.getElementById("myModal");

//   // Get the button that opens the modal
//   var btn = document.getElementById("myBtn");

//   // Get the <span> element that closes the modal
//   var span = document.getElementsByClassName("close")[0];

//   // When the user clicks the button, open the modal 
//   btn.onclick = function () {
//       modal.style.display = "block";
//   }

//   // When the user clicks on <span> (x), close the modal
//   span.onclick = function () {
//       modal.style.display = "none";
//   }

//   // When the user clicks anywhere outside of the modal, close it
//   window.onclick = function (event) {
//       if (event.target == modal) {
//           modal.style.display = "none";
//       }
//   }



// //<<<<<<<-----------question -19---------->>>>>>>

// (function ($) {
//     $(function () {
//         $('.slider').slick({
//             dots: true,
//             prevArrow: '<a class="slick-prev slick-arrow" href="#" style=""><div class="icon icon--ei-arrow-left"><svg class="icon__cnt"><use xlink:href="#ei-arrow-left-icon"></use></svg></div></a>',
//             nextArrow: '<a class="slick-next slick-arrow" href="#" style=""><div class="icon icon--ei-arrow-right"><svg class="icon__cnt"><use xlink:href="#ei-arrow-right-icon"></use></svg></div></a>',
//             customPaging: function (slick, index) {
//                 var targetImage = slick.$slides.eq(index).find('img').attr('src');
//                 return '<img src=" ' + targetImage + ' "/>';
//             }
//         });


//     });
// })(jQuery);


// //<<<<<<<-----------question -20---------->>>>>>>
// const form = document.getElementById('form')

// form.addEventListener('submit', form)=> {
//     event.preventDefault()
// }

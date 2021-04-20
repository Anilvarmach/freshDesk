let form = myDom('form');

form.setAttribute('name', 'data');

// First Name
let nameRow = myDom('div', 'row');
let firstName = myDom('div', 'form-group col-6');
let firstNameLabel = document.createElement('label');
firstNameLabel.setAttribute('for', 'firstname');
firstNameLabel.textContent = "First Name :";
let firstNameInput = myDom('input', 'form-control', 'firstname', 'text');
firstName.append(firstNameLabel, firstNameInput);

// Email
let email = myDom('div', 'form-group col-6');
let emailLabel = document.createElement('label');
emailLabel.setAttribute('for', 'email');
emailLabel.textContent = "Email :";

let emailInput = myDom('input', 'form-control', 'email', 'email');
email.append(emailLabel, emailInput);
nameRow.append(firstName, email);


let secondRow = myDom('div', 'row');
let title = myDom('div', 'form-group col-6');
let titleLabel = document.createElement('label');
titleLabel.setAttribute('for', 'title');
titleLabel.textContent = "Job Title :";
let titleInput = myDom('input', 'form-control', 'title', 'text');
title.append(titleLabel, titleInput);

// PHONE
let phone = myDom('div', 'form-group col-6');
let phoneLabel = document.createElement('label');
phoneLabel.setAttribute('for', 'phone');
phoneLabel.textContent = "Phone :";

let phoneInput = myDom('input', 'form-control', 'phone', 'text');
phone.append(phoneLabel, phoneInput);
secondRow.append(title, phone);

let thirdRow = myDom('div', 'row');
// TWITTER ID
let twitter = myDom('div', 'form-group col-6');
let twitterLabel = document.createElement('label');
twitterLabel.setAttribute('for', 'twitter');
twitterLabel.textContent = "Twitter ID :";

let twitterInput = myDom('input', 'form-control', 'twitter', 'text');
twitter.append(twitterLabel, twitterInput);

// Facebook ID
let facebook = myDom('div', 'form-group col-6');
let facebookLabel = document.createElement('label');
facebookLabel.setAttribute('for', 'facebook');
facebookLabel.textContent = "Facebook ID :";

let facebookInput = myDom('input', 'form-control', 'facebook', 'text');
facebook.append(facebookLabel, facebookInput);

thirdRow.append(twitter,facebook);

let row = document.querySelector('#form-area');
form.append(nameRow,secondRow,thirdRow);
row.append(form);

// FUNCTION TO CRETE ELEMENTS
function myDom(elem, elemClass = ' ', elemId = ' ', elemType = ' ') {
    let element = document.createElement(elem);
    element.setAttribute('class', elemClass);
    element.setAttribute('id', elemId);
    element.setAttribute('type', elemType);
    return element;
}

const MY_DOMAIN = "https://aknuanil678.freshdesk.com/";
const API_KEY = "Oeq0OyfUNVzKLqd5QsLU";


const Base64API_KEY = window.btoa(API_KEY);
const CONTACTS_PATH = "api/v2/contacts";
      

function viewRecord() {
    let FirstName = document.data.querySelector('#firstname').value;
    let email = document.data.querySelector('#email').value;
    let JobTitle = document.data.querySelector('#title').value;
    let Phone = document.data.querySelector('#phone').value;
    let Twitter_id = document.querySelector("#twitter").value;
    
    let contactData = {
        name: `${FirstName}`,
        job_title: `${JobTitle}`,
        email: `${email}`,
      phone: `${Phone}`,
      twitter_id: `${Twitter_id}`,
      };
      const config = {
        method: "POST",
        body: JSON.stringify(contactData),
        headers: {
          Authorization: "Basic " + btoa(API_KEY),
          "Content-Type": "application/json",
        },
      };
    fetch(MY_DOMAIN + CONTACTS_PATH, config)
        .then((res) => res.json())
      .then((data) => {
        console.log(data);
        })
        .catch((err) => console.log(err));
   console.log(FirstName,email,JobTitle,Phone,Twitter_id)
}


























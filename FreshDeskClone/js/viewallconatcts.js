const MY_DOMAIN = "https://aknuanil678.freshdesk.com/";
const API_KEY = "Oeq0OyfUNVzKLqd5QsLU";
//Base64 encoding of API_KEY
const Base64API_KEY = window.btoa(API_KEY);
let contactData;
const config = {
  headers: {
    Authorization: "Basic " + btoa(API_KEY),
  },
};
const CONTACTS_PATH = "api/v2/contacts";
fetch(MY_DOMAIN + CONTACTS_PATH, config)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
      data.forEach((element) => {
        var tableData = document.querySelector('#myData');
        var row = `<tr>
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.job_title}</td>
        <td>${element.email}</td>
        <td>${element.phone}</td>
        <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onclick="myFunction(${element.id})">
       Edit
      </button></td>
        
   </tr>`

     tableData.innerHTML += row;
    });
  })
    .catch((err) => console.log(err));



// ******************
//  UPDATE DATA   ***  
// ******************
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

let row = document.querySelector('#update-data');
form.append(nameRow,secondRow,thirdRow);
row.append(form);
function myDom(elem, elemClass = ' ', elemId = ' ', elemType = ' ') {
    let element = document.createElement(elem);
    element.setAttribute('class', elemClass);
    element.setAttribute('id', elemId);
    element.setAttribute('type', elemType);
    return element;
}
function myFunction(id) {
    let FirstName = document.data.querySelector('#firstname');
    let email = document.data.querySelector('#email');
    let JobTitle = document.data.querySelector('#title');
    let Phone = document.data.querySelector('#phone');

    const CONTACTS_PATH = "api/v2/contacts/";
    fetch(MY_DOMAIN + CONTACTS_PATH + id, config)
      .then((res) => res.json())
        .then((data) => {
            FirstName.setAttribute('value', `${data.name}`);
          email.setAttribute('value', `${data.email}`);
          JobTitle.setAttribute('value', `${data.job_title}`);
          Phone.setAttribute('value', `${data.phone}`);
      })
      .catch((err) => console.log(err));
}

function updateData(getId) {

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
    const CONTACTS_PATHs = "/api/v2/contacts/";
      const config = {
        method: "PUT",
        body: JSON.stringify(contactData),
        headers: {
          Authorization: "Basic " + btoa(API_KEY),
          "Content-Type": "application/json",
        },
  };


    fetch(MY_DOMAIN + CONTACTS_PATHs +getId, config)
        .then((res) => res.json())
        .then((data) => {
            console.log(data.id);
        })
        .catch((err) => console.log(err));
   
}
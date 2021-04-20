const MY_DOMAIN = "https://aknuanil678.freshdesk.com/";
const API_KEY = "Oeq0OyfUNVzKLqd5QsLU";
//Base64 encoding of API_KEY
const Base64API_KEY = window.btoa(API_KEY);
const config = {
    headers: {
        Authorization: "Basic " + btoa(API_KEY),
    },
};
const TICKETS_PATH = "api/v2/tickets";
fetch(MY_DOMAIN + TICKETS_PATH, config)
    .then((res) => res.json())
    .then((data) => {
        noOfTickets.innerHTML = data.length;
    })
    .catch((err) => console.log(err))

let noOfTickets = document.querySelector('#total_tickets');

const CONTACTS_PATH = "api/v2/contacts";
fetch(MY_DOMAIN + CONTACTS_PATH, config)
    .then((res) => res.json())
    .then((data) => {
        noOfContacts.innerHTML = data.length;
    })
    .catch((err) => console.log(err))

let noOfContacts = document.querySelector('#total_contacts');

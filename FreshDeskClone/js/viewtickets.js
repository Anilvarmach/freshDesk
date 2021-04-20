let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

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
        console.log(data);
        data.forEach(element => {
            let card = myCard('div', 'card shadow p-3 mb-3 bg-white rounded');
            let cardBord = myCard('div', 'card-body');
            let row = myCard('div', 'row');
            let col1 = myCard('div', 'col-lg-8 col-md-8 col-sm-8');
            let subject = myCard('p', 'card-text text-capitalize font-weight-bold text-primary');
            subject.innerHTML = `<span class="text-info">Subject:</span>   ${element.subject} `;
            let date = myCard("p", "card-text");
            let indate = new Date(element.created_at);
            date.innerHTML = `<span class="text-info font-weight-bold">Created at:</span>  ${indate.getDate()} <sup>th</sup>
                                            ${monthNames[indate.getMonth()]}
                                            ${indate.getFullYear()}, at
                                            ${indate.getHours()}
                                            hours ${indate.getMinutes()} Minutes`;
            let type = myCard('p', 'card-text ');
            type.innerHTML = `<span class="text-info font-weight-bold">Type:</span>  ${element.type} `;

            col1.append(subject, date, type);
            
            let col2 = myCard('div', 'col-lg-4 col-md-4 col-sm-4');
            let priority = myCard('p', 'card-text');
            if (element.priority == 1) {
                priority.innerHTML = `<span class="text-info font-weight-bold">Priority:</span>  <span class="text-success">Low</span>`;
            } else if (element.priority == 2) {
                priority.innerHTML = `<span class="text-info font-weight-bold">Priority:</span>   <span class="text-primary">Medium</span>`;
            } else if (element.priority == 3) {
                priority.innerHTML = `<span class="text-info font-weight-bold">Priority:</span>   <span class="text-warning ">High</span>`;
            } else if (element.priority == 4) {
                priority.innerHTML = `<span class="text-info font-weight-bold">Priority:</span>   <span class="text-danger">Urgent</span>`;
            }

            let status = myCard('p', 'card-text');
            if (element.status == 1) {
                status.innerHTML = `<span class="text-info font-weight-bold">Status:</span> Open`;
            } else if (element.status == 2) {
                status.innerHTML = `<span class="text-info font-weight-bold">Status:</span> Pending`;
            } else if (element.status == 3) {
                status.innerHTML = `<span class="text-info font-weight-bold">Status:</span> Resolved`;
            } else if (element.status == 4) {
                status.innerHTML = `<span class="text-info font-weight-bold">Status:</span> Closed`;
            } else if (element.status == 5) {
                status.innerHTML = `<span class="text-info font-weight-bold">Status:</span> Waiting On  Customer`;
            } else if (element.status == 6) {
                status.innerHTML = `<span class="text-info font-weight-bold">Status:</span> Waiting on  Third Party`;
            }

            col2.append(priority,status)
            row.append(col1, col2);
            cardBord.append(row);
            card.append(cardBord);
            col.append(card);
        });
    })



let col = document.querySelector('#ticket');
function myCard(elem,elemClass='') {
    let element = document.createElement(elem);
    element.setAttribute('class', elemClass);
    return element;
} 
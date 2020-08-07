const { default: Axios } = require("axios")

import axios from 'axios'
// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element
const topics = document.querySelector('.topics')

const tab = (topic) =>{
    const topicDiv = document.createElement('div')
    topicDiv.classList.add('tab')
    topicDiv.textContent = topic
    topics.appendChild(topicDiv)
}

axios.get('https://lambda-times-api.herokuapp.com/topics')
    .then(response => {
        console.log(response)
        const datas = response.data.topics
        datas.forEach(topic => {
            tab(topic)
            console.log('hi')
        });
    })
    .catch(error => {
        const errors = document.querySelector(".errors-container")
        const errMessge = document.createElement('p')
        errMessge.textContent = error
        errors.appendChild(errMessge)
    })


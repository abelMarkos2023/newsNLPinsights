// Replace checkForName with a function that checks the URL
import { checkTheURL } from './urlChecker'
// If working on Udacity workspace, update this with the Server API URL e.g. `https://wfkdhyvtzx.prod.udacity-student-workspaces.com/api`
// const serverURL = 'https://wfkdhyvtzx.prod.udacity-student-workspaces.com/api'
const serverURL = 'http://localhost:8000/api'

document.addEventListener('load', function(){

    
const form = document.getElementById('urlForm');
const result = document.getElementById('results');

if (form){
    form.addEventListener('submit', handleSubmit)
}


})

function handleSubmit(event) {
    event.preventDefault();

    // Get the URL from the input field
    const formText = document.getElementById('name');

    
    
    // Check if the URL is valid

    if(!checkTheURL(formText.value)){

        alert('Please Enter a Valid URL To Process Your Article');
        return;
    }
 
        // If the URL is valid, send it to the server using the serverURL constant above


        sendToServer(formText.value);

        formText.value = '';
}



// Function to send data to the server

async function sendToServer(input){


    try{
        const response = await fetch(serverURL,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json', // Set the content type to JSON
            },
            body: JSON.stringify({input}),
    
            
        })
        const data = await response.json()

        //CoarseTopics

        const coarseTopics = data.response.coarseTopics
        .map(topic => topic.label).join('-');

        const coarseTopicsDiv = document.createElement('div');
        const coarseTopicsHead = document.createElement('h3');
        const coarseTopicsText = document.createElement('p')
        

        coarseTopicsHead.innerText = 'coarseTopics:  ';  
        coarseTopicsText.innerText = coarseTopics;
        coarseTopicsDiv.appendChild(coarseTopicsHead);
        coarseTopicsDiv.appendChild(coarseTopicsText);
        
        result.appendChild(coarseTopicsDiv);
        //Entities
        const entities = data.response.entities.map(ent => ent.matchedText).join('-');


        const entityDiv = document.createElement('div');
        const entityHead = document.createElement('h3');
        const entityText = document.createElement('p')
        

        entityHead.innerText = 'Entities';  
        entityText.innerText = entities;
        entityDiv.appendChild(entityHead);
        entityDiv.appendChild(entityText);
        
        result.appendChild(entityDiv)

        //Topics 

        const topics = data.response.topics.slice(0,30).map(topic => topic.label).join('-');

        const topicDiv = document.createElement('div');
        const topicHead = document.createElement('h3');
        const topicText = document.createElement('p')
        

        topicHead.innerText = 'Topics:  ';  
        topicText.innerText = topics;
        topicDiv.appendChild(topicHead);
        topicDiv.appendChild(topicText);
        
        result.appendChild(topicDiv);

        


        

    }catch(error){
        console.log(error.message)
    }
}

// Export the handleSubmit function
module.exports = {sendToServer };


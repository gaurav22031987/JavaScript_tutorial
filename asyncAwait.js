const { async } = require("rxjs");

function makeReques(location) {
    return new Promise((resolve, reject) => {
        console.log(`making request to ${location}`);
        if (location === 'Google') {
            resolve('google say hi');
        }
        else {
            reject('error only talk to google');
        }
    })
}


function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Processing Response');
        console.log(`Extra Information ${response}`);
    })

}

makeReques('Google').then(response => { // pass facebook for catch error
    console.log('Response Received');
    return processRequest(response);
}).then(processedResponse => {
    console.log(processedResponse);
}).catch(err => {
    console.log(err);
})

/*
making request to Google
Response Received
Processing Response
Extra Information google say hi
*/

// async awit function

async function dowork() {
    try {
        const response = await makeReques('Google');
        console.log('response received');
        const processingResponse = await processRequest(response);
        console.log(processingResponse);

    }
    catch (err) {
        console.log(err);
    }
}

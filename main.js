//DOM Elements
let numInput = document.getElementById('numInput');
let factOutput = document.querySelector('#factOutput')

//fetch API
const getFact = () => {
    let number = numInput.value;
    
    /*if (number != ''){
        fethc('http://numbersapi.com/'+number)
        .then(response => response.text())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        })
    } */
    
    if (number != '')
        
        axios.get('http://numbersapi.com/'+number)
        .then(response => {
            console.log(response.data);
            factOutput.innerText = response.data;
        })
        .catch(error => {
            console.log(error);
        })
    }


//Listening to events
numInput.addEventListener('input', getFact);
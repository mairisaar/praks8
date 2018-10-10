//DOM Elements
let numInput = document.getElementById('numInput');
let factOutput = document.querySelector('#factOutput');
let incInput = document.querySelector('#incInput');

//fetch API
const getFact = () => {
    factOutput.innerHTML = '';
    
    let number = numInput.value;
    let inc = incInput.value;
    
    let baseUrl = 'http://numbersapi.com/';
    
    let url = `${baseUrl}${number}..${parseInt(number) + parseInt(inc)}`; 
    
    /*if (number != ''){
        fethc('http://numbersapi.com/'+number)
        .then(response => response.text())
        .then(data => {
            console.log(data);
            factOutput.innerText = response.data;
        })
        .catch(error => {
            console.log(error);
        })
    } */
    
    
    
    if (number != '' && inc != '')
        
        axios.get(url)
        .then(response => {
            //console.log(response.data); 
            //factOutput.innerText = response.data;
            for (let item in response.data) {
                console.log(item);
                let li = document.createElement('li');
                li.innerText = response.data[item];
                factOutput.appendChild(li)
            }
                
            
        })
        .catch(error => {
            console.log(error);
        })
    }


//Listening to events
numInput.addEventListener('input', getFact);
incInput.addEventListener('input', getFact);
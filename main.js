const divDisplay = document.querySelector('p')
const clearBtn = document.querySelector('#refresh')
const equal = document.querySelector('.equal')

let text =''

clearBtn.addEventListener('click', clear)
equal.addEventListener('click', calcute)

function display(sign){
    if(divDisplay.innerHTML == '0'){
        divDisplay.innerHTML =''
    }
        text += sign
        divDisplay.innerHTML +=sign
}

function calcute(){
    if(text.includes("^")){
        let num = text.split("^")
        let result =Math.pow(num[0],num[1]);
        divDisplay.innerHTML = result
        text=''
    }else{
        divDisplay.innerHTML =eval(text)
        text=''
    }  
    if(text == ''){
        divDisplay.innerHTML = '0'
        
    }
}

function clear(){
    divDisplay.innerHTML ='0'
    text=''
}
function mathOperation(name){ 
    switch (name) {
        case 'sqrt':
            divDisplay.innerHTML =Math.sqrt(text)
            break;
        case 'abs':
            divDisplay.innerHTML =Math.abs(text)
            break;
        case 'floor':
            divDisplay.innerHTML =Math.floor(text)
            break;
        case 'ceil':
            divDisplay.innerHTML =Math.ceil(text)
            break;
        case 'round':
            divDisplay.innerHTML =Math.round(text)
            break;
    }
}


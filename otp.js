let input1 = document.getElementById("userInput");
let getButton = document.getElementById("get");
let randomValue = document.getElementById("randomNum");

getButton.addEventListener('click', () => {
    let data = input1.value;

    if(!data){
        alert("Please enter some value");

    }else if(data == 4){
        const num = Math.floor(Math.random()*(10000));
        
        randomValue.textContent = num;
        randomValue.style.color = "green";
    }else if(data == 5){
        const num = Math.floor(Math.random()*100000);
        
        randomValue.textContent = num;
        randomValue.style.color = "green"
    }else if(data == 6){
        const num = Math.floor(Math.random()*1000000);
        
        randomValue.textContent = num;
        randomValue.style.color = "green"
    }else if(data == 7){
        const num = Math.floor(Math.random()*10000000);
        
        randomValue.textContent = num;
        randomValue.style.color = "green"
    }else if(data == 8){
        const num = Math.floor(Math.random()*100000000);
        
        randomValue.textContent = num;
        randomValue.style.color = "green"
    }else{
        randomValue.textContent = "Enter valid number!!!"
        randomValue.style.color = "red"
    }
    
})
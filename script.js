//Task No 1

function Start(){
    let age = prompt('Please, enter your age:')
    if(age > 17){
        if(age < 101){
            alert('You are ready to drive')
        }
    }
    else if(age > 100){
        alert('You are too old to drive')
    }
    else if(age < 18){
        if(age > -1){
            alert('You are to young to drive')
        }
    }
    else if(age < 0){
        alert('Please enter your real age')
    }
}




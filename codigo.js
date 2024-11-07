document.getElementById("button").addEventListener("click", message);

function message() {
    let age = document.getElementById("number").value;
    
    console.log("number");

    if(age >= 1  &&  age <= 5) {alert('You are a baby!');
    }
    else if(age >=6 && age <= 12) {alert('You are a preteen!')
    } 
    else if(age >=13 && age <= 17){alert('You are a teenager!')
    }
    else if(age >= 18 && age <= 40){alert('You are a young adult!')
    }
    else if(age >= 41 && age <= 60){alert('You are an adult!')
    }
    else if(age >= 61 && age <= 100){alert('You are old!')
    } 
    else {alert('Are you a human?')
    }
}

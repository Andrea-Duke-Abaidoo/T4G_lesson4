function checkAge() {
    let age= prompt("What is your age?");
    if (age<6){
        alert(`You are ${age} years old and you are to young.`);
    
    } else if(age<=6 && age<=7){
    
    alert(`You are ${age} years old and you have limited options.`);
    
    } else if(age >=18) {
        alert(`You are ${age} years old and you can enjoy all the options.`);
    } else {
        alert(`Enter an age please.`);
    }
    }
    
    checkAge();
    prompt();
    
    
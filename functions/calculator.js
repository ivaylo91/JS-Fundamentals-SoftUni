function calculator(num1,num2,operation){
    if(operation === "multiply"){
        return num1 * num2;
    } else if(operation === "divide"){
        return num1 / num2;
    } else if(operation === "add"){
        return num1 + num2;
    } else if(operation === "subtract"){
        return num1 - num2;
    }
}
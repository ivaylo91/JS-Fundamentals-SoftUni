function round(number,precision){
    if(precision > 15) {

        precision = 15;

    }
    number = number.toFixed(precision);

    console.log(Number(number));
}
round(3.5,2);
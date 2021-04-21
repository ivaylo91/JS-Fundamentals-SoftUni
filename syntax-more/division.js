function division(number) {
    let div = [10, 6, 7, 3, 2];

    for (let i = 0; i <= 5; i++) {
        let a = div.shift();
        if (number % a === 0) {
            console.log(`The number is divisible by ${a}`);
            break;
        } else if (i === 5) {
            console.log("Not divisible");
        }
    }
}
division(30);
division(15);
function evenOddSubtraction(inputArr) {
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < inputArr.length; i++) {
        if (inputArr[i] % 2 === 0) {
            evenSum += Number(inputArr[i]);
        } else {
            oddSum += Number(inputArr[i]);
        }
    }
    console.log(evenSum - oddSum);
}

evenOddSubtraction([1, 2, 3, 4, 5, 6]);
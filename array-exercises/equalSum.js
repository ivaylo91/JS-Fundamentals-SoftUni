function equalSum(arr) {
    let isEqual = false;
    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        //right sum
        for (let j = i + 1; j < arr.length; j++) {
            rightSum += arr[j];
        }
        //left sum
        for (let l = 0; l < i; l++) {
            leftSum += arr[l];
        }
        if (leftSum === rightSum) {
            isEqual = true;
            console.log(i);
        }
    }
    if (!isEqual) {
        console.log("no");
    }
}

equalSum([1, 2, 3, 3]);
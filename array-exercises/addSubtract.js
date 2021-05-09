function modified(arr) {
    let modArr = [];
    let sumOriginal = 0;
    let sumModified = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            modArr.push(arr[i] + i);
        } else {
            modArr.push(arr[i] - i);
        }
    }
    console.log(modArr);
    for (let i = 0; i < arr.length; i++) {
        sumOriginal += arr[i];
    }
    for (let i = 0; i < modArr.length; i++) {
        sumModified += modArr[i];
    }
    console.log(sumOriginal);
    console.log(sumModified);
}

modified([5, 15, 23, 56, 35]);

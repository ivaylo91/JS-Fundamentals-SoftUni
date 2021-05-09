function reverse(n, inputArr) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(inputArr[i]);
    }
    for (let i = arr.length - 1; i >= 0; i--) {
         console.log(arr[i]);
    }
}

reverse(3, [10, 20, 30]);
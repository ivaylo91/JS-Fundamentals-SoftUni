function reverseString(inputArr) {
    let output = '';
    for (let i = inputArr.length - 1; i >= 0; i--) {
        output += inputArr[i] + " ";
    }
    console.log(output);
}

reverseString(['aaa', 'bbb', 'ccc', 'ddd', 'eee']);
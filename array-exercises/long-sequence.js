function findLongSequence(arr) {
    let sequence = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        let currentSeq = [element];

        for (let j = i + 1; j < arr.length; j++) {
            if(element === arr[j]){
                currentSeq.push(element);
            }else{
                break;
            }
        }
        if(sequence.length < currentSeq.length){
            sequence = currentSeq;
        }
    }
    console.log(sequence.join(" "))
}

findLongSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
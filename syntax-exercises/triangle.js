function draw(n) {
    for (let i = 1; i <= n; i++) {
        let eachLine = '';
        for (let j = 1; j <= i; j++) {
            eachLine += i + " ";
        }
        eachLine = eachLine.trim();
        console.log(eachLine);
    }
}

draw(5);
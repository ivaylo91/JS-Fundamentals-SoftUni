function rotate(arr, n) {
    for (let i = 0; i < n; i++) {
       let first = arr.shift();
       arr.push(first);
    }
    console.log(arr.join(" "));
}

rotate([2, 4, 15, 31], 5);


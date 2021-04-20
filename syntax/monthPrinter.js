function solve(day) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    if (day <= months.length) {
        console.log(months[day-1]);
    } else {
        console.log("Error!");
    }
}
solve(3);
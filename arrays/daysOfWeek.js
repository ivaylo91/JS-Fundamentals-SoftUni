function printDay(day) {
    let daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    if (day <= daysOfWeek.length) {
        console.log(daysOfWeek[day - 1]);
    } else {
        console.log("Invalid day!");
    }
}

printDay(1);
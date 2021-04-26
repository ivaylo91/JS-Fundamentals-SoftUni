function calc(groupOfPeople, type, day) {
    let price = 0.00
    if (type === "Students") {
        if (day === "Friday") {
            price = 8.45
        } else if (day === "Saturday") {
            price = 9.80
        } else if (day === "Sunday") {
            price = 10.46
        }
    } else if (type === "Business") {
        if (day === "Friday") {
            price = 10.90
        } else if (day === "Saturday") {
            price = 15.60
        } else if (day === "Sunday") {
            price = 16
        }
    } else if (type === "Regular") {
        if (day === "Friday") {
            price = 15
        } else if (day === "Saturday") {
            price = 20
        } else if (day === "Sunday") {
            price = 22.50
        }
    }
    let total = groupOfPeople * price;
    let discounted = 0;

    if (type === "Regular" && groupOfPeople >= 10 && groupOfPeople <= 20) {
        discounted = total * 0.05;

    } else if (type === "Business" && groupOfPeople >= 100) {
        discounted = 10 * price;

    } else if (type === "Students" && groupOfPeople >= 30) {
        discounted = total * 0.15;

    }
    console.log( `Total price: ${(total - discounted).toFixed(2)}`);
}

calc(40,
    "Regular",
    "Saturday"
);
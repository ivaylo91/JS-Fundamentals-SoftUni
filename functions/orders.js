function printOrder(product, quantity) {
    let total = 0;
    if (product === "coffee") {
        total += quantity * 1.50;
    } else if (product === "water") {
        total += quantity * 1.00;
    } else if (product === "coke") {
        total += quantity * 1.40;
    } else if (product === "snacks") {
        total += quantity * 2.00;
    }
    return total.toFixed(2);
}
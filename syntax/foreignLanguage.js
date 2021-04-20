function printForeignLanguage(input) {
    if (input === "USA" || input === "England") {
        console.log("English")
    } else if (input === "Mexico" || input === "Argentina" || input === "Spain") {
        console.log("Spanish")
    } else {
        console.log("unknown")
    }
}
printForeignLanguage("Germany");
function main(ticketType) {
    let ticketPrice;
    if (ticketType === "student") {
        ticketPrice = 1.60;
        console.log(`$${ticketPrice.toFixed(2)}`);
    } else if (ticketType === "regular") {
        ticketPrice = 1.00;
        console.log(`$${ticketPrice.toFixed(2)}`);
    } else {
        console.log("Invalid ticket type!");
    }
}

main("student");
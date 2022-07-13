function main(type, size) {

    let area;
    let circle;

    if (type === "square") {
        area = size * size;
        console.log(area.toFixed(2));
    } else {
        circle = Math.PI * size * size;
        console.log(circle.toFixed(2));
    }
}
main("square", 5);
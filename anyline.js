var available_num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
var blank1 = [], blank2 = [], blank3 = []
var rows = []

var row1 = [], row2 = [], row3 = [];
var pressedRow1 = [], pressedRow2 = [], pressedRow3 = [];
var pressed = []
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
shuffle(available_num)
var shuffled = available_num
for (var i = 0; i < 30; i++) {
    $(".btn".concat(i)).text("".concat(shuffled[i]))
}
while (blank1.length !== 5) {
    var integer = Math.floor(Math.random() * 10);
    if (!blank1.includes(integer))
        blank1.push(integer)
}
while (blank2.length !== 5) {
    var integer = Math.floor(Math.random() * 10) + 10;
    if (!blank2.includes(integer))
        blank2.push(integer)
}
while (blank3.length !== 5) {
    var integer = Math.floor(Math.random() * 10) + 20;
    if (!blank3.includes(integer))
        blank3.push(integer)
}
for (var i = 0; i < 5; i++) {
    $(".btn".concat(blank1[i])).text("---")
    $(".btn".concat(blank2[i])).text("---")
    $(".btn".concat(blank3[i])).text("---")
}
for (var i = 0; i < 10; i++) {
    if (!blank1.includes(i)) {
        row1.push(i)
        rows.push(i)
    }

}
for (var i = 10; i < 20; i++) {
    if (!blank2.includes(i)) {
        row2.push(i)
        rows.push(i)
    }
}
for (var i = 20; i < 30; i++) {
    if (!blank3.includes(i)) {
        row3.push(i)
        rows.push(i)
    }
}


$("button").on("click", function () {
    var newClass = '.'.concat(this.className)
    let result = parseInt(this.className.slice(3,));
    if (rows.includes(result)) {

        $(newClass).attr("disabled", "disabled")
        let result = parseInt(this.className.slice(3,));
        if (row1.includes(result))
            pressedRow1.push(result);
        else if (row2.includes(result))
            pressedRow2.push(result);
        else if (row3.includes(result))
            pressedRow3.push(result)
        if (pressedRow1.length === 5 || pressedRow2.length === 5 || pressedRow3.length === 5)
            alert("You Have Won")
    }
}
);

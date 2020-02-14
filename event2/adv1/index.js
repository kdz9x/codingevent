function gettext() {
    var num = ("1,2,3,4,5");
    console.log(num);
    add(num);
}
function add(num) {
    let number = num.replace(/,/g, " ");
    let newNumber = number.split(" ");

    console.log(num.split(",")); //[1,2,3,4,5]

    var sum = 0;
    for (var i = 0; i < newNumber.length; i++) {
        sum += Number(newNumber[i]);
    }
    console.log(sum)
}
gettext();


//regex
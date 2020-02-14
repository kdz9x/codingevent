function gettext() {
    var num = ('1\n2,3,4');
    console.log(num);
    add(num);
}
function add(num) {
    let number = num.replace(/\,|\n/g, " ");
    let newNumber = number.split(" ");
    var sum = 0;
    for (var i = 0; i < newNumber.length; i++) {
        sum += Number(newNumber[i]);
    }
    console.log(sum)
}
gettext();
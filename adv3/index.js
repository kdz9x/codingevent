function gettext() {
    var num = ("//\n1,2,3,4");
    var a = num.slice(2, 3);
    console.log(typeof(a));
    console.log("\n");
    console.log(num);
    add(num,a);
}   
function add(num,a) {
    var result = "\\" + a;
    let b = num.slice('3');
    let number = b.replace(new RegExp(result, 'g'), " ");
    if (a=="\n"){
       number = b.replace(/\,|\n/g, " ");
    }
    let newNumber = number.split(" ");
    var sum = 0;
    for (var i = 0; i < newNumber.length; i++) {
        sum += Number(newNumber[i]);
    }
    console.log(sum)
}
gettext();
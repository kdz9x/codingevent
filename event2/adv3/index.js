function gettext() {
    var num = "//t\n1t2t3t4";
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
        console.log('23');
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

add('1,2')
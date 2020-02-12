function gettext(){
    var a = ("1\n2,3");
    let number = a.replace(/\,|\n/g," ");
    let newNumber = number.split(" ");
    const total = () => {
        var sum=0;
        for (var i = 0;i<newNumber.length;i++){
            sum += Number(newNumber[i]);
        }
        console.log(sum)
    }
    total();
}
gettext();
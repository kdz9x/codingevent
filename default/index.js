function gettext(){
    var a = ("10,20");
    let number = a.replace(","," ");
    let newNumber = number.split(" ")
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
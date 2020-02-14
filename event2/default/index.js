function gettext(){
    var a = ("10,20");
    var number = a.replace(","," ");
    var newNumber = number.split(" ");
    const total = () => {
        var sum=0;
        for (let i = 0;i<newNumber.length;i++){
            sum += Number(newNumber[i]);
        }
        console.log(sum)
    }
    total();
}
gettext();
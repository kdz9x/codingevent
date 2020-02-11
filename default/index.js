function gettext(){
    var a = ("");
    let number = a.replace(",","");
    const total = () => {
        var sum=0;
        for (var i = 0;i<number.length;i++){
            sum += Number(number[i]);
        }
        console.log(sum)
    }
    total();
}
gettext();
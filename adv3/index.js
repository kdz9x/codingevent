function gettext(){
    var j =(";");//Dinh nghia ki tu phan chia
    var a = ("//" + j + "\n1;3"); //nhap ki tu
    console.log(a);
    let b = a.slice('4');
    let number = b.replace(j," ");
    let newNumber = number.split(" ");
    function total() {
        var sum=0;
        for (var i = 0;i<newNumber.length;i++){
            sum += Number(newNumber[i]);
        }
        console.log(sum)
    }
    total();
}
gettext();
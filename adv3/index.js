function gettext(){
    var j =("-");//Dinh nghia ki tu phan chia
    var a = ("//" + j + "\n1-3-4"); //nhap ki tu
    var result = "\\" + j;
    let b = a.slice('4');
    let number = b.replace(new RegExp(result,'g')," ");
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
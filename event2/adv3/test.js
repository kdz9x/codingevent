function add(a){
    let b = a.toString().slice(2,3);
    let result = '\\' + b;
    let c = a.toString().slice('4');
    let num = c.replace(new RegExp(result,'g')," ");
    if ( b=="\n"){
        num = b.replace(/\,|\n/g, " ");
    }
    let newNum = num.split(" ");
    let sum = 0;
    for ( let i = 0; i<newNum.length;i++){
        sum +=parseInt(newNum[i]);
    }
    console.log(sum);
}
add("//;\n11;223qw;2");
function chess(x,y){
  var a = [-2,-2,-1,-1,1,1,2,2];
  var b = [-1,1,-2,2,-2,2,-1,1];
  var c = [];
  for ( let i = 0;i < 8;i++){
    a[i] += x;
    b[i] += y;
    if (a[i] > 0 & a[i]<8){
      if ( b[i] > 0 & b[i]<8){
        c[i]=[a[i],b[i]];
      };
    }; 
    };
  var array = c.filter(function (el){
    return el!=null;
  });
  console.log('Số lựa chọn trong nước đi tiếp theo là: ',array.length);
  console.log('Các nước đó là: ',array);
}
chess(1,7)
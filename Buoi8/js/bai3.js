var n = prompt('Mời bạn nhập số nguyên n:');
var S = 0;
var gt = 1;
for(var i = 1; i <=n; i++){
	gt=gt*i;
	S= S+(i/gt);
}
 console.log('Tổng S= ',S);	
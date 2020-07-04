var n = prompt('Nhập số nguyên dương n:','');
alert(n);
var S=0;
for(var i = 1; i <= n; i++){
	S=S+1/i;
}
console.log('Tổng S= ',S);
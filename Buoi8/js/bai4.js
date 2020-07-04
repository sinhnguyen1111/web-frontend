var k=prompt('Nhập k= ','');
alert(k);
var N=prompt('Nhập N: ','');
alert(N);
var M=prompt('Nhập M: ','');
alert(M);
var S=0;
var i;
console.log('Tính tổng các số chia hết cho k= ',k);
console.log('Trong khoảng(N,M):',N,M);
for(i = N; i <= M; i++){
	if(i % k == 0){
		S=S+i;
	}
}
console.log('Tổng S= ',S);
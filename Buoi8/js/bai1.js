var dem = 0;
for(var i = 1; i <=100; i++){
	if(i % 3 == 0 || i % 7 == 0){
		dem++;
		console.log('Các số nguyên chia hết cho 3 và 7 là:',i);
	}	
}
console.log('Số lượng số nguyên chia hết cho 3 và 7 là:',dem);

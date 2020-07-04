document.write('Hình 1:'+'<br>')
var soDong = prompt('Mời bạn nhập số dòng','7');
alert(soDong);
var i;
var j;
for(i = 1; i<=soDong; i++){
	for(j = 1; j <= i; j++){
		document.write('*');
	}
	document.write('</br>');
}

document.write('Hình 2:'+'<br>');
var soCot = prompt('Mời bạn nhập số cột','7');
for(i = 1; i<soDong; i++){
	for(j =1; j <= soCot; j++){
		document.write('*');
	}
	document.write('</br>');
}

//Hình 3
 document.write('Hình 3:'+'<br>');
for(i=1; i<=soCot;i++){
	document.write('*');
}
document.write('<br>');
for(i=1; i<=soDong-2; i++){
	// document.write('*');
	// for(j=; j<= soCot-1;j++){
	// 	// document.write('	');
	// }
	document.write('*'+'<br>');

}

for(i=1; i<=soCot;i++)
{
	document.write('*');
}
//Hình 4
document.write('<br>'+'Hình 4:'+'<br>');
for(i=soDong;i>=1;i--){
	for(j=1;j<=i;j++){
		document.write('*');
	}
	document.write('</br>');
}
	
		

	

// alert('Hello');
// var cf = confirm('Bạn có thích zent ?');
// alert(cf);
// var name = prompt('Mời bạn nhập tên');
// alert(name);

// var name = "Sinh";

// document.write(name);
// alert(name);

// var a = 4;
// ++a;
// alert(a);
console.log('Tổng hai số: ',2+4);
console.log('Hiệu hao sô: ',4-2);
console.log('Tích hai số: ',2*4);
console.log('Chia nguyên: ',4/2);
console.log('Chia lấy dư: ',4%3);
 // var a = 5;
 // console.log('Giá trị của a++',a++);
 // console.log('Gias trị cua a',a);
 // var b = 3;
 // console.log('Giá trị của a++',b++);
 // console.log('Gias trị cua a',a);
 // var a = 5;
 // console.log('Giá trị của a++',a++);
 // console.log('Gias trị cua a',a);

 // var a = 5;
 // console.log('Giá trị của a++',a++);
 // console.log('Gias trị cua a',a);
 var a=10;
 var b=18;
 var x=a-- + b++ - ++b - ++a;
 console.log('Giá trị của x:',x);

 console.log('phép toán 10 = 18', a==b);
 var bien_1 = false;
 var bien_2 = true;
 console.log('Phép toán ||', (bien_1 || bien_2));
 console.log('Phép toán &&',(bien_1 && bien_2));
 console.log('Phép toán !',!(bien_1));
 console.log('Phép toán ',!(bien_1 || bien_2));

 var ket_qua = bien_1 ? "Kết quả đúng" : "Kết quả sai"
 console.log(ket_qua);

 var age=15;
 if(age>=18){
 	console.log('Chào bạn');
 }
else{
	console.log('Bạn chưa đủ tuổi.');
}

var thu;
switch(thu){
	case "2":
	console.log('Thứ Hai');
	break;
	default:
	console.log('Nhap sai');
}

for(var i=0;i<10;i++){
	console.log('Chép phạt lần thứ :',i+1);
}

var j=0
while(j<5){
	console.log('Số lần: ',j)
	j++;
}

var k=0;
do{
	console.log('In ra Số lần: ',k);
	k++;
}
while(k<5);

var S=0;
for(var i=0;i<10;i++){
	S=S+i;
}
console.log('Giá trị tổng S= ',S);

var S1=0;
var j=1;
while(j<1){
	S1=S1+j;
	j++;
}
console.log('Giá trị của S1= ',S1);

var S2=0;
var k=0;
do{
	S2=S2+k;
	k++;
}
while(k<5);
console.log('Giá trị tổng S2= ',S2);

for(var i = 0; i < 10; i++){
	if(i == 5){
		break;
	}
	console.log("i= ",i);
}


for(var i = 0; i<10; i++){
	if(i == 5){
		continue;
	}
	console.log('i= ',i);
}

function showMessages(){
	console.log('Đây là Messages');
}
showMessages();

function tinhTong(a,b){
	console.log('Tổng hai số= ',a+b);
}
tinhTong(3,5);
tinhTong(2,1);
var s1 = tinhTong(3,5);
var s2= tinhTong(2,1);




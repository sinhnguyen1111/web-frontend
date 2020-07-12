var contents = document.getElementsByClassName('content1');
var buttons = document.getElementsByClassName('btn');

var slide = document.getElementsByTagName('li');
var images= document.getElementsByClassName('menu');

var images_list = document.getElementsByTagName('img');
// console.log(images_list);
function ButtonSlide(element){
	// var images_list = document.getElementsByTagName('img');
	
	// //Lấy tất cả menu bỏ menu-active
	// for(var i = images_list.length-1 ; i>=0 ; i--)
	// {
	// 	images_list[i].className=images_list[i].className.replace(' menu-active','');
	// }
	// images_list[0].className = images_list[0].className +' menu-active';

// 	var listButton = document.getElementsByClassName(' item');
// 	//Lấy tất cả item bỏ active
// 	for(var i= listButton.length-1 ;i>=0; i-- )
// 	{
// 		listButton[i].className=listButton[i].className.replace(' active','');
// 	}
// 	element.className = element.className + ' active';
// }
	for(var i=0;i<images.length-1;i++)
	{
		images[i].style.display="none";
		images[i].className=images[i].className.replace(' menu-activective','');

	}
	element.className=element.className + ' menu-active';
	var item = element.id;
	var text = document.getElementsByClassName(item);
	text[0].style.display="block";

	element.style.background="white";
}

var images= document.getElementsByClassName('menu');
// console.log(images);
var i=0;
var size = [];
var time = 3000;

size[0]='a.jpg';
size[1]='b.jpg';
size[2]='a.jpg';
size[3]='b.jpg';
size[4]='a.jpg';
size[5]='b.jpg';
size[6]='a.jpg';
size[7]='b.jpg';
size[8]='a.jpg';
size[9]='b.jpg';
// var index = size.length;
// console.log(index);
function nextImages(){
	document.getElementsByTagName('img').src=size[i];
	if(i< size.length-1)
	{
		i++;
	}
	else{
		i=0;
	}
	setTimeout("nextImages()",time);
}
// window.onload=nextImages;

// function buttonCheck(){
// 	if(index <images.length)
// 	{
// 		index++;
// 		console.log(index);
// 	}
// 	else 
// 	{
// 		index=1;
// 		console.log(index);
// 	}
// 	images_list.src=images_list[size];
// }




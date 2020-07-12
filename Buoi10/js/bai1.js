	var fullName = document.frm.name;
	var msg_error = document.getElementsByClassName('error');
	fullName.addEventListener('focus',function(){
		this.style.background="gray";
	});

	fullName.addEventListener('change',function()
	{
		var nameValue = fullName.value;
		var text='';
		if(nameValue=='' || nameValue==null)
		{
			text="Không được để trống";
		}
		else if(nameValue.length < 8)
		{
			text=" Độ dài không được nhỏ hơn 8 kí tự";
		}
		else{
		 	return true;
		}
		console.log(text);
		document.getElementById('nameError').innerHTML=text;

	});

	var email = document.frm.email;
	email.addEventListener('change',function(){
		var emailValue = email.value;
		var text='';
		if(emailValue=='' || emailValue== null)
		{
			text = "Email không được trống";
		}
		else{
			return true;
		}
		console.log(text);
		document.getElementById('emailError').innerHTML = text;

	});


	var numberPhone = document.frm.number;
	numberPhone.addEventListener('change',function(){
		var numberValue = numberPhone.value;
		var text ='';
		if(numberValue=='' ||numberValue == null)
		{
			text='Số điện thoại không được bỏ trống';
		}
		else {
			if(numberValue.length>10 ||numberValue.length<10)
			{
			text='Không hợp lệ!';
			}
			else 
				if(isNaN(numberPhone))
			{
				text='Chỉ nhập giá trị số';
			}
				else{
					return true;
				}
		}		
		console.log(text);
		document.getElementById('phoneError').innerHTML = text;
	});

	 var password = document.frm.password;
	 password.addEventListener('change',function(){
	 	 var passwordValue = password.value;
	 	 var text = '';
	 	 if(passwordValue == '' || passwordValue == null)
	 	 {
	 	 	text = 'Không được bỏ trống';
	 	 }
	 	 else 
	 	 	{
	 	 		return true;
	 	 	}
	 	 	console.log(text);
	 	 	document.getElementById('passwordError').innerHTML = text;
	 });

	 var password2 =document.frm.password2;
	 password2.addEventListener('submit',function()
	 {
	 	var password2Value = password2.value;
	 	var text = '';
	 	if(password2Value == '' || password2Value == null)
	 	{
	 		text = 'Không được bỏ trống';
	 	}
	 	else 
	 	{
	 		if(password2Value !== passwordValue)
	 		{
	 			text = 'password không khớp';
	 		}
	 		else
	 		{
	 			text='';
	 		}
	 	}
	 	console.log(text);
	 	document.getElementById('password2Error').innerHTML=text;
	 });

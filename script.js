profiles = ["Username", "Password"]
function newAccount(){
	temp = []
	let username = document.getElementById('username');
	let password = document.getElementById('password');
	if(profiles.include(username)){
		alert("Sorry that username has already been taken please try agian")
	}
	if(profiles.include(password)){
		alert("Sorry that password has already been taken please try agian")
	}
	profiles.push(username);
	profiles.push(password);
	console.log(username)
	console.log(password)
}

function checkpass(form)
{
 if(profiles.includes(form.userid.value) && profiles.includes(form.pswrd.value))
  {
    open('index.html', '_self')
  }
 else
 {
   alert("Sorry, the username password was wrong, please try agian")
  }
}

function emailAlert(){
	alert("Your email has been sent expect a apoximently 1 day")
}
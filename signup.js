let passwordInput = document.getElementById("password");
let eye = document.querySelector(".show");
let email = document.getElementById("email");
eye.addEventListener('click', ()=>{
				if (passwordInput.type == 'password') {
								passwordInput.type = "text";
								eye.src = "visibility_black_24dp.svg"
				}else {
								passwordInput.type = "password";
								eye.src = "visibility_off_black_24dp.svg";
				}
})
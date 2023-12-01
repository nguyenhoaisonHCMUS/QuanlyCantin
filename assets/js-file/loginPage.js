

//Đăng nhập
var accAPI = 'http://localhost:3000/accounts';

var accounts = [];
console.log()
fetch(accAPI)
    .then(response => {
        return response.json();
    })
    .then(accounts =>{        
        var loginBtn = document.getElementById('login-submit');

        loginBtn.addEventListener("click", function(e){
            var tkText = document.querySelector('.login-acc');
            var mkText = document.querySelector('.login-password');
            var required_acc = document.querySelector('.required-acc');
            var required_pass = document.querySelector('.required-pass');

            
            if(!tkText.value){
                required_acc.style.display = 'block';
            }

            if(!mkText.value){
                required_pass.style.display = 'block';
            }

            if (!mkText.value || !tkText.value){
                console.log(1); 
                return;            
            }else{
                let inspect = accounts.filter((value) => {
                    return value.account === tkText.value;
                });

                if (inspect.length === 0){
                    required_acc.innerText = "Tài khoản không đúng";
                    required_acc.style.display = 'block';
                }else{
                    if (inspect[0].password === mkText.value){
                        alert("đúng");

                        //code chuyển trang home tại đây


                        
                    }else{
                        alert("tài khoản hoặc mật khẩu sai");
                        e.preventDefault();
                    }
                }                 
            }
        })
        
        
    })
    .catch(error =>{
        alert(error);
    })




//Đăng nhập end








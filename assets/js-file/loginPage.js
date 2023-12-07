

//Đăng nhập
var accAPI = 'http://localhost:3000/accounts';


fetch(accAPI)
    .then(response => {
        return response.json();
    })
    .then(accounts =>{        
        handleLogin(accounts);
        
        
    })
    .catch(error =>{
        alert(error);
    })



function handleLogin(accounts){
    var loginBtn = document.getElementById('login-submit');
    console.log(loginBtn);
    loginBtn.addEventListener("click", function(e){
        var tkText = document.querySelector('.login-acc');
        var mkText = document.querySelector('.login-password');
        var required_acc = document.querySelector('.required-acc');
        var required_pass = document.querySelector('.required-pass');
        
        if(!tkText.value){
            required_acc.style.display = 'block';
        }else{
            required_acc.style.display = 'none';
        }
        if(!mkText.value){
            required_pass.style.display = 'block';
        }else{
            required_pass.style.display = 'none';

        }
        if (!mkText.value || !tkText.value){
            e.preventDefault();            
        }else{
            let inspect = accounts.filter((value) => {
                
                return value.account === tkText.value;
            });
            if (inspect.length === 0){

                required_acc.innerText = "Tài khoản không đúng";
                required_acc.style.display = 'block';
                e.preventDefault();
            }else{

                if (inspect[0].password === mkText.value){
                    alert("Đăng nhập thành công");

                    //code chuyển trang home tại đây
                    window.location.href = 'https://www.youtube.com/watch?v=8hafdx5Q-Ns';

                    
                }else{
                    alert("tài khoản hoặc mật khẩu sai");
                    e.preventDefault();
                }
            }                 
        }
    })
    
}






function handleRegister (){
    var registerBtn = document.getElementById('register-submit');
    

    var nameRegister = document.querySelector('.register-name');
    // console.log(nameRegister);
    // console.log(1);

    var tkText = document.querySelector('.login-acc');
    var mkText = document.querySelector('.login-password');
    var mkText2 = document.querySelector('.required-password');
    var checkPolicy = document.getElementById('checkbox-policy');

    //list required
    var required_acc = document.querySelector('.required-acc');
    var required_pass = document.querySelector('.required-pass');
    var reRequired_pass = document.querySelector('.reRequired-pass');
    var required_name = document.querySelector('.required-name');

    registerBtn.addEventListener('click',(e) => {

        if(!nameRegister.value){
            required_name.innerText = 'Bạn phải nhập Họ và tên';
            required_name.style.display = 'block';
        }else{
            required_acc.style.display = 'none';
        }
        if(!tkText.value){
            required_acc.style.display = 'block';
        }else{
            required_acc.style.display = 'none';
        }
        if(!mkText.value){
            required_pass.style.display = 'block';
        }else{
            required_pass.style.display = 'none';
        }
        if(!mkText2.value){
            required_name.innerText = 'Bạn phải nhập lại mật khẩu';
            reRequired_pass.style.display = 'block';
        }else{
            if (mkText.value === mkText2.value){
            required_name.innerText = 'Nhập lại mật khẩu không chính xác';
            reRequired_pass.style.display = 'block';
            }
        }
        if (!checkPolicy.checked){
            e.preventDefault();
        }
        e.preventDefault();

    })


    

}

function createAcc(account, callback){
    var option = {
        method: 'POST',
        body: JSON.stringify(account),
        headers: {
            'Content-Type': "application/json"
        }
    }
    fetch(accAPI, option)
        .then(function (reponse){
            reponse.json();
        })
        .then(callback);
        
}




//Đăng nhập end

//Chuyển đổi giữa Đăng nhập/Đăng ký
clickLogin();


function clickLogin(){
    var formLogin = document.querySelector('.login-contentlogin');
    var formLogout = document.querySelector('.login-contentregis');

    var formEnabel = document.querySelector('.login-form');
    console.log(formEnabel.classList);
    
    formLogin.addEventListener('click', (e) => {
        var checkForm = formEnabel.classList.contains('register-form');
        console.log(checkForm);
        if (checkForm){
            formEnabel.classList.remove('register-form');
            formLogin.classList.add('active');
            formLogout.classList.remove('active');
        }
        else{
            e.preventDefault();
        }
    })
}

clickRegis();

function clickRegis(){
    var formLogout = document.querySelector('.login-contentregis');
    var formLogin = document.querySelector('.login-contentlogin');

    var formEnabel = document.querySelector('.login-form');
    
    formLogout.addEventListener('click', (e) => {
        var checkForm = formEnabel.classList.contains('register-form');
        if (!checkForm){
            formEnabel.classList.add('register-form');
            formLogout.classList.add('active');
            formLogin.classList.remove('active');
        }

    })
}



resetImg();

function resetImg (){
    document.addEventListener("DOMContentLoaded", function () {
        var images = document.querySelectorAll(".advertisement-imgs");
        var currentIndex = 0;
    
        function showNextImage() {
            images[currentIndex].classList.remove("active");
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add("active");
        }
    
        // Hiển thị hình ảnh đầu tiên
        images[currentIndex].classList.add("active");
    
        setInterval(showNextImage, 3000); 
    });
}
//Bật điều khoản sử dụng và chính sách bảo mật

turnOnTerm();
function turnOnTerm() {
    var see_termUse = document.querySelector('.register-policy-DKSD');
    var termUse = document.querySelector('.term');
    see_termUse.addEventListener('click',(e) => {
        termUse.style.display = 'flex';
    })
}


//Tắt điều khoản sử dụng và chính sách bảo mật
turnOffTerm(document.querySelector('.term'));

function turnOffTerm(element) {
    var termUse = document.querySelector('.term');
    // console.log(termUse);
    element.addEventListener('click',(e) => {
        if(e.target.classList.contains('term')){
            termUse.style.display = 'none';
        }    
    })
}






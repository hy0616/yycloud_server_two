(function(){

    var basicCheck = function(username, pwd){
        if(!username){

            alert("用户名不能为空!");
            return false;
        }
        if(!pwd){

            alert("密码不能为空!");
            return false;
        }

        if(pwd.length <6){
            alert("密码长度不少于六位数");
            return false;
        }

        return true;
    }

    $('.login_form').submit(function(){

        return false;
    })

    $('#login_btn').click(function(){

        var username = $('.login_name:nth-child(1) input').val();
        var pwd = $('.login_pwd:nth-child(2) input').val();
        if(!basicCheck(username, pwd))return false;
        $(this).html("正在登录...");
        $.localStorage("yy.token","test-token")
        $.localStorage("yy.username", username);
        window.location = "./index.html";
    })

    $('.retrieve_btn:nth-child(4) a').click(function(){

        $('.login_form').css('display', 'none');
        $('.retrieve_pwd').css('display', 'block');
    })

    $('.return_login a').click(function(){

        $('.login_form').css('display', 'block');
        $('.retrieve_pwd').css('display', 'none');
    })


})();
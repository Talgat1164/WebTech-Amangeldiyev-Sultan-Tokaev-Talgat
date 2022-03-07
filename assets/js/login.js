$(document).ready(function(){
    $('#login').click(function(){
        var email=$('#signup-email').val();
        var pass =$('#signup-pass').val();
        if(email=="" || pass==""){
            alert("Fill out the form");
        }
        else{
            if(pass.length < 8 || pass.length > 30){
                alert("Wrong!!!");
            }
            else{
                let counter1 = 0;
                let counter2 = 0;
                let counter3 = 0;
                let counter4 = 0;
                for( let i = 0; i < pass.length; i++){
                    if(pass.codePointAt(i)>=48 && pass.codePointAt(i)<=57){
                        counter1++;
                    }
                    if(pass.codePointAt(i)>=33 && pass.codePointAt(i)<=47){
                        counter2++;
                    }
                    if(pass.codePointAt(i)>= 65 && pass.codePointAt(i)<=90){
                        counter3++;
                    }
                    if(pass.codePointAt(i)>= 37 && pass.codePointAt(i)<=122){
                        counter4++;
                    }
                }
                let condition1= false;
                let condition2= false;
                if(counter1 > 0 && counter2 > 0 && counter3 > 0 && counter4 > 0){
                    condition1 = true;
                }
                let em1 = 0;
                let em2 = 0; 
                for( let j = 0; j < email.length; j++){
                    if(email.codePointAt(j) == 64){
                        em1++;
                    }
                    if(email.codePointAt(j) == 46){
                        em2++;
                    }
                }
                if(em1 > 0 && em2 > 0){
                    condition2 = true;
                }
                else{
                    $(document).ready(function(){
                        $('#login').click(function(){
                            $("#signup-email").val("Wrong email");
                            $("#signup-email").css({"color": "red", "font-size": "17px", "opacity": ".7"});
                        });
                    });
                }
                if(condition1 == true && condition2 == true){
                    document.location.href = "index.html";
                }
            }

        } 
    });
});
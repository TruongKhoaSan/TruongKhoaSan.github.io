$("#form").on("submit", function(){
    let checker = true;
    
    if($("#user").val().trim() == ""){
        checker = false;
        $("#user+#notification").text("Bạn chưa nhập tên").show();
    }
    
    
    if($("#pass").val() == ""){
        checker = false;
        $("#pass+#notification").text("Bạn chưa nhập password").show();
    }else if($("#pass").val().match() != null){
        checker = false;
        $("#password+#notification").text("Password không được chứa khoảng trắng").show();
    }else if($("#pass").val().length < 5 || $("#pass").val().length > 15){
        checker = false;
        $("#pass+#notification").text("Password phải từ 5 đến 15 ký tự").show();
    }
    
    if($("#passwordTest").val() !== $("#password").val()){
        checker = false;
        $("#passwordTest+#notification").text("Password không khớp").show();
    }
    
    if($("#email").val().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/) == null){
        checker = false;
        $("#email+#notification").text("Email không hợp lệ").show();
    }

    if(!Number.isInteger(+$("#telephone").val()) || $("#telephone").val().indexOf(".") != -1 ){
        checker = false;
        $("#telephone+#notification").text("Số điện thoại không hợp lệ").show();
    }else if($("#telephone").val().length != 10){
        checker = false;
        $("#telephone+#notification").text("Phải chứa 10 chữ số").show();
    }

    if($("#address").val().trim() == ""){
        checker = false;
        $("#address+#notification").text("Bạn chưa nhập địa chỉ").show();
    }

    if($("input:radio[name='gender']:checked").length == 0){
        checker = false;
        $(".gender #notification").text("Bạn chưa chọn giới tính").show();
    }

    return checker;
});

$("input").on("focus", function(){
    $(this).next("#notification").hide();
});
$("input:radio[name='gender']").change(function(){
    $(".gender #notification").hide();
});
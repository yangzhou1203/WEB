/**
 * Created by Administrator on 2017/10/14.
 */
$(function(){
    $('#txtName').mouseover(function(){
        if($(this).val()=="用户/邮箱/手机号") {
            $(this).val("");
        }
    });
    $('#txtName').mouseout(function(){
        if($(this).val()=="") {
            $(this).val("用户/邮箱/手机号");
        }
    });

});
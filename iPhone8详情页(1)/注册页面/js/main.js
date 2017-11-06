/**
 * Created by Administrator on 2017/10/11.
 */
//点击输入框时，输入框字向左移动
$('.tInp').click(function(){
    $(this).prev('span').animate({left:'-75px'},'slow');
});

//鼠标经过帮助中心时，显示隐藏内容
$('#h-help').mouseover(function(){
    $('.h-helpUl').css('border','1px solid #E1E1E1');
    $('.h-helpUl li').css('display','block');
});
$('.h-helpUl').mouseout(function(){
    $('.h-helpUl').css('border','none');
    $('.h-helpUl li').css('display','none');
});
$('.h-helpUl li').mouseover(function(){
    $('.h-helpUl').css('border','1px solid #E1E1E1');
    $('.h-helpUl li').css('display','block');
});

//输入框正则验证
$('#txtName').blur(function(){
    var re =/^[\u4e00-\u9fa5]{2,4}$/;
    var value = $('#txtName').val();
    if(re.test(value)){
        $('.r-f1').text('请继续输入');
        $('.r-f1').css('color','green');
    }else{
        $('.r-f1').text('请输入正确的手机号码');
        $('.r-f1').css('color','red');
    }
});
$('#txtPhone').blur(function(){
    var re =/^\d{11}$/;
    var value = $('#txtPhone').val();
    if(re.test(value)){
        $('.r-f2').text('请继续输入');
        $('.r-f2').css('color','green');
    }else{
        $('.r-f2').text('请输入正确的手机号码');
        $('.r-f2').css('color','red');
    }
});
$('#txtNum').blur(function(){
    var re =/^\d{4}$/;
    var value = $('#txtNum').val();
    if(re.test(value)){
        $('.r-f3').text('请继续输入');
        $('.r-f3').css('color','green');
    }else{
        $('.r-f3').text('请输入正确的验证码');
        $('.r-f3').css('color','red');
    }
});
$('#txtPassword').blur(function(){
    var re =/^\d{6,12}$/;
    var value = $('#txtPassword').val();
    if(re.test(value)){
        $('.r-f4').text('请继续输入');
        $('.r-f4').css('color','green');
    }else{
        $('.r-f4').text('请输入正确的密码');
        $('.r-f4').css('color','red');
    }
});
$('#txtConPas').blur(function(){
    var re =/^\d{6,12}$/;
    var value = $('#txtConPas').val();
    if(re.test(value)){
        $('.r-f5').text('请继续输入');
        $('.r-f5').css('color','green');
    }else{
        $('.r-f5').text('请输入正确的密码');
        $('.r-f5').css('color','red');
    }
});


//注册背景图片
var timer = null;
var onOff = true;
var k = 0;
timer = setInterval(function(){
    k++;
    if(k>=5){
        k=0;
    }
        $('.registBody').css('background',"url('images/r_icon"+ k +".png') no-repeat");



},2500);

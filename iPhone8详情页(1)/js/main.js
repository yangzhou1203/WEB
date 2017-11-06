/**
 * Created by Administrator on 2017/10/12.
 */
$(function(){

//图片划过显示大图效果
    $('#dl-smallImg ul li').mouseover(function(){
        var idx = $(this).index();
        //$('#dl-big ul li:eq('+idx+')').addClass('img-block').siblings().removeClass('img-block');
        //$('#dl-big ul li:eq('+idx+')').find('img').attr('data','con');
        //$('#dl-big ul li:eq('+idx+')').siblings().find('img').removeAttr('id');
        $('#dl-smallImg ul li:eq('+idx+')').addClass('smallImg-block').siblings().removeClass('smallImg-block');
        $('#dl-Img ul li:eq('+idx+')').addClass('img-block').siblings().removeClass('img-block');

    });
});


$(function(){
    //当点击选择是添加active类
    //改变价格
    $('#dr-versionUl ul li').click(function(){
        var idx = $(this).index();
        $('#dr-versionUl ul li:eq('+idx+')').addClass('active').siblings().removeClass('active');
        $('#dr-versionUl ul li:eq('+idx+')').find('div').addClass('duigou');
        $('#dr-versionUl ul li:eq('+idx+')').siblings().find('div').removeClass('duigou');
        if($('#dr-versionUl ul li:eq('+idx+')').find('span').html() == '64GB'){
            $('#dr-price').find('h2').html('￥6688.00');
        }else{
            $('#dr-price').find('h2').html('￥7988.00');
        }
    });

    $('#dr-colorUl ul li').click(function(){
        var idx = $(this).index();
        $('#dr-colorUl ul li:eq('+idx+')').addClass('active').siblings().removeClass('active');
        $('#dr-colorUl ul li:eq('+idx+')').find('div').addClass('duigou');
        $('#dr-colorUl ul li:eq('+idx+')').siblings().find('div').removeClass('duigou');

    });
    $('#ir-introduce ul li').click(function(){
        var idx = $(this).index();
        $('#ir-introduce ul li:eq('+idx+')').addClass('introduce').siblings().removeClass('introduce');
    });







});


//放大镜
$(function(){

    window.onload = function(){
        //		1 获取相关元素
        var oSmallImg = document.getElementsByClassName("img-block")[0];
        //var  oSmall= oSmallImg.getElementsByTagName("img")[0];
        var oBig = document.getElementById("dl-big");
        var oRec = document.getElementById("dl-small");
        var oSmall = document.getElementById("dl-Img");
        var bigImg = document.getElementById("big_img");

//　2 事件类型 给small 添加三个事件
        oSmall.onmouseover = function() {
            oRec.style.display = "block";
            oBig.style.display = "block";
        }
        //console.log(oSmall.offsetLeft);
        oSmall.onmousemove = function(ev) {
            ev = ev || event;
            var x =  ev.pageX - oSmall.offsetLeft - oRec.offsetWidth/2 ;
            var y =  ev.pageY - oSmall.offsetTop - oRec.offsetHeight/2 ;
            //console.log(this.offsetLeft);
            //console.log(ev.clientY);
            // 让rec盒子的left值  =   鼠标x坐标  -  small盒子的左侧偏移量 -  rec盒子自身宽度的一半  + "px";

            //限制范围
            // 三元运算
            //最小 位置  为0  最大位置  small盒子的宽度 减去 rec盒子的宽度  那个值 正好rec盒子的最大left值
            x = x<0 ? 0 : x;
            x = x>this.offsetWidth-oRec.offsetWidth?this.offsetWidth-oRec.offsetWidth:x;
            y = y<0?0:y;
            y = y>this.offsetHeight-oRec.offsetHeight?this.offsetHeight-oRec.offsetHeight:y;

            oRec.style.left = x + "px";
            oRec.style.top = y + "px";

            // 同时让右边的bigDIv里面的图片跟着走
            //小图移动的位置/小图移动的最大位置 = 大图移动的位置/大图移动的最大位置
            //console.log(this.offsetWidth);
            //console.log(oRec.offsetWidth);
            var a  =this.offsetWidth-oRec.offsetWidth;
            var b =  bigImg.offsetWidth-oBig.offsetWidth;
            //console.log(bigImg.offsetWidth);
            //console.log(oBig.offsetWidth);
            //oBig.style.backgroundPosition = -5*x + "px "+ -5*y +"px";
            var c = -x/a*b;
            var d = -y/a*b;
            bigImg.style.left = c+"px";
            bigImg.style.top = d+"px";


        }

        oSmall.onmouseout = function() {
            oRec.style.display = "none";
            oBig.style.display = "none";
        }
    };

});

//计数器
$(function(){

    var k=1;
    $('.add').click(function(){
        console.log(1);
        k++;
        $('#dr-computingNum').find('span').html(k);
    });
    $('.no_reduce').click(function(){
        k--;
        if(k<=1){
            k=1;
        }
        $('#dr-computingNum').find('span').html(k);
    });
});


//换一批效果
$(function(){
    var onOff = true;
    $('#lookLook').find('a').click(function(){
        if(onOff){
            $('#dg-lookBd li:nth-child(even)').css('display','block');
            $('#dg-lookBd li:nth-child(odd)').css('display','none');
        }else{
            $('#dg-lookBd li:nth-child(even)').css('display','none');
            $('#dg-lookBd li:nth-child(odd)').css('display','block');
        }
        onOff = !onOff;
    });

});

//点击换一批图片显示大图
$(function(){
    $('#dg-lookBd>li>img').click(function(){
        //console.log(1);
        $('.ad').animate({
            display:'block',
            left:'-690px',
            top:'-160px',
            width:'600px',
            height:'600px'
        },500);


    })
    $('#delete').click(function(){
        $('.ad').animate({
            display:'block',
            left:'30px',
            top:'50px',
            width:'1px',
            height:'1px'
        },500);
    })


});
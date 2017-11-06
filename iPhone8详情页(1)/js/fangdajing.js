/**
 * Created by Administrator on 2017/10/12.
 */
//window.onload = function(){
//    //		1 获取相关元素
//    var oSmallImg = document.getElementsByClassName("img-block")[0];
//    //var  oSmall= oSmallImg.getElementsByTagName("img")[0];
//    var oBig = document.getElementById("dl-big");
//    var oRec = document.getElementById("dl-small");
//    var oSmall = document.getElementById("dl-Img");
//    var bigImg = document.getElementById("big_img");
//
////　2 事件类型 给small 添加三个事件
//    oSmall.onmouseover = function() {
//        oRec.style.display = "block";
//        oBig.style.display = "block";
//    }
//    //console.log(oSmall.offsetLeft);
//    oSmall.onmousemove = function(ev) {
//        ev = ev || event;
//        var x =  ev.pageX - oSmall.offsetLeft - oRec.offsetWidth/2 ;
//        var y =  ev.pageY - oSmall.offsetTop - oRec.offsetHeight/2 ;
//        //console.log(this.offsetLeft);
//        //console.log(ev.clientY);
//        // 让rec盒子的left值  =   鼠标x坐标  -  small盒子的左侧偏移量 -  rec盒子自身宽度的一半  + "px";
//
//        //限制范围
//        // 三元运算
//        //最小 位置  为0  最大位置  small盒子的宽度 减去 rec盒子的宽度  那个值 正好rec盒子的最大left值
//        x = x<0 ? 0 : x;
//        x = x>this.offsetWidth-oRec.offsetWidth?this.offsetWidth-oRec.offsetWidth:x;
//        y = y<0?0:y;
//        y = y>this.offsetHeight-oRec.offsetHeight?this.offsetHeight-oRec.offsetHeight:y;
//
//        oRec.style.left = x + "px";
//        oRec.style.top = y + "px";
//
//        // 同时让右边的bigDIv里面的图片跟着走
//        //小图移动的位置/小图移动的最大位置 = 大图移动的位置/大图移动的最大位置
//        //console.log(this.offsetWidth);
//        //console.log(oRec.offsetWidth);
//        var a  =this.offsetWidth-oRec.offsetWidth;
//        var b =  bigImg.offsetWidth-oBig.offsetWidth;
//        //console.log(bigImg.offsetWidth);
//        //console.log(oBig.offsetWidth);
//        //oBig.style.backgroundPosition = -5*x + "px "+ -5*y +"px";
//        var c = -x/a*b;
//        var d = -y/a*b;
//        bigImg.style.left = c+"px";
//        bigImg.style.top = d+"px";
//
//
//    }
//
//    oSmall.onmouseout = function() {
//        oRec.style.display = "none";
//        oBig.style.display = "none";
//    }
//};





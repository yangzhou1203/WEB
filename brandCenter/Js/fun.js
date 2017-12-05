// 拖拽插件
;(function ($) {
	$.fn.drag = function (options) {
		var o = $.extend({
			bar : '.bar'
		},options);
		var _this = $(this);
		_this.find(o.bar).mouseover(function () {
			$(this).css('cursor','move');
		}).mousedown(function (ev) {
			_move = true;
			var _left = _this.offset().left,
				_top = _this.offset().top,
				pos_x = ev.clientX,
				pos_y = ev.clientY,
				win = $(window),
				scro_x = win.scrollLeft(),
				scro_y = win.scrollTop(),
				win_w = win.width(),
				win_h = win.height(),
				_width = _this.outerWidth(),
				_height = _this.outerHeight();
			$(document).mousemove(function (ev) {
				var mov_x = ev.clientX,
					mov_y = ev.clientY,
					move_left = _left + mov_x - pos_x,
					move_top = _top + mov_y - pos_y;
				if(move_left <=scro_x || move_left + _width >= win_w || move_top <= scro_y || move_top + _height >= win_h) {
					return false;
				}
				_this.css({left:move_left,top:move_top});
			});
		}).mouseup(function () {
			$(document).unbind('mousemove');
		});
		$(document).mouseup(function () {
			$(this).unbind('mousemove');
		});
	}
})(jQuery);

;(function($){
	$.fn.skygqOneDblClick = function(options){
		return this.each(function(){
			var s = $.extend({}, $.fn.skygqOneDblClick.Default, options || {});
			var self_obj = this;
			do_click = function(e){
			    clearTimeout(s.timer);
			    s.timer = setTimeout(function(){s.oneclick.call(self_obj,e);},250);
			},
			do_dblclick = function(e) {
			    clearTimeout(s.timer);
			    s.dblclick.call(self_obj,e);
			};
			$(this).click(do_click).dblclick(do_dblclick);
		});
	};
	$.fn.skygqOneDblClick.Default = {
		timer: null,
		oneclick: $.noop,
		dblclick: $.noop
	};
})(jQuery);

// 获取图片路径
function getPath(obj) {
	if (obj) {
		if (navigator.userAgent.indexOf("MSIE") > 0 && !(navigator.userAgent.indexOf("MSIE 10.0") > 0)) {
			obj.select();
			obj.blur();
			// IE下取得图片的本地路径            
			return document.selection.createRange().text;
		} else {
			if (obj.files) {
				if (navigator.userAgent.indexOf("MSIE 10.0") > 0) {
					var objectURL = window.URL.createObjectURL(obj.files[0]);
				} else {
					// 其他浏览器下取得的是图片的数据 （webkit要使用webkitURL）
					var objectURL = (window.webkitURL ? webkitURL : URL).createObjectURL(obj.files.item(0));  
				}
				return objectURL;
			}
			return obj.value;
		}
		return obj.value;
	}
}

// 公共函数
function showLayer(obj,args,reload) {
	// 背景遮罩
	$('#mask').height($(document).height()).show();

	obj.find('a.cancle').unbind('click').bind('click',function () {
		if(isModify(obj.find('form.check'),args)) {
			if(window.confirm('数据尚未保存，确定要关闭？')) {
				obj.find('form').each(function () {
					this.reset();
				});
				obj.add('#mask').hide();
				obj.find('li:first').trigger('click');
				if(reload == true) {
					window.location.reload();
				}
			}
		} else {
			obj.add('#mask').hide();
			obj.find('.tit li:first').trigger('click');
		}
	});
	var argWidth = obj.outerWidth();
	//alert(argWidth)
	var argHeight = obj.outerHeight();
	var winWidth = $(window).width();
	var winHeight = $(window).height();

	obj.show().css({left:(winWidth - argWidth) / 2,top:(winHeight - argHeight) / 2 + $(window).scrollTop()});
	obj.drag({bar:'.tit'});
}

// 公用函数 检测表单是否更改
function isModify(dom,args) {
	var flag = false;
	$.each(args,function (i,item) {
		dom.find(item).each(function (ev) {
			var _type = $(this).attr('type')
			switch(_type) {
				case 'hidden':
				case 'text':
				case 'file':
				case 'password':
				case 'area':
				if($(this).val() != this.defaultValue) {
					return flag = true;
				}
				break;
				case 'checkbox':
				case 'radio':
				if(this.checked != this.defaultChecked) {
					return flag = true;
				}
				break;
				case 'select-one':
				case 'select-multiple':
				$(this).find('option').each(function () {
					if(this.selected != this.defaultSelected) {
						return flag = true;
					}
				});
				break;
			}
		});
	});
	return flag;
}

// 公用函数 弹出层提示信息
function showMsg(msg,time) {
	var _html = '<div id="msg" class="layers">';
		_html += '<div class="tit"><h3>提示</h3><a href="javascript:void(0);" class="cancle">X</a></div>';
		_html += '<div class="tb"></div>';
		_html += '</div>';

	$(_html).find('.tb').html(msg).end().appendTo('body');

	$win = $(window);
	var x = (($win.width() - $(_html).outerWidth()) / 2) + $win.scrollLeft() + "px";
	var y = (($win.height() - $(_html).outerHeight()) / 2) + $win.scrollTop() + "px";

	$('#msg').find('a.cancle').click(function () {
		$('#msg').hide();
	});

	$('#msg').css({left:x,top:y}).fadeIn(500);

	if(time != undefined) {
		setTimeout(function () {$('#msg').fadeOut(300);},time);
	}

}

$(function () {
	// 二级导航菜单
	$('.subnav .sup').hover(
		function () {
			var _this = $(this);
			_this.find('.nav-bar h4').css('color','#3A4244');
			_this.find('.nav-bar').addClass('cur');
			if(_this.find('.sub').children().size() > 0) {
				_this.find('.blank').show();
				_this.siblings().find('.sub').stop(true,true);
				_this.find('.sub').slideDown(300);
			}
		},
		function () {
			var _this = $(this);
			_this.find('.nav-bar h4').css('color','');
			_this.find('.nav-bar').removeClass('cur');
			_this.find('.blank').hide();
			_this.find('.sub').hide();
		}
	);

	// 显示更多标签
	$('div.more-tag div.wrap').hover(
		function () {
			var w = $(this).parents('.bar').outerWidth() - 10;
			$(this).find('.tag-list').width(w).show();
		},
		function () {
			$(this).find('.tag-list').hide();
		}
	);

	// 鼠标悬停产品
	$('div.product').hover(
		function () {
			var _this = $(this);
			_this.find('div.proimg').css('background','#789600');
			_this.find('div.act,div.tags').show();
		},
		function () {
			var _this = $(this);
			_this.find('div.proimg').css('background','');
			_this.find('div.act,div.tags').hide();
		}
	);

	// 编辑、添加标签
	$('div.product a.edittag').live('click',function () {
		var _this = $(this);
		var _tag = '';
		var _pid = _this.attr('pid');
		_this.parents('.tags').find('a.tag').each(function () {
			_tag += $(this).text() + ' ';
		});
		$('#tags a.tag').each(function () {
			if(_tag.indexOf($(this).text()) > 0) {
				$(this).addClass('also');
			}
		});
		$('#tags').find('input[type="text"]').val($.trim(_tag));
		$('#tags .add').find('input[type="hidden"]').val(_pid);
		showLayer($('#tags'),['input']);
	});

	$('#tags .tag').click(function () {
		var _this = $(this);
		var _tags = _this.parents('#tags').find('input[type="text"]').val().split(' ');
		if(_tags.length >= 5) {
			showMsg('最多只能5个标签!',3000);
			return false;
		}
		if($.inArray(_this.text(),_tags) == -1) {
			_tags.push(_this.text());
			_this.parents('#tags').find('input[type="text"]').val(_tags.join(' '));
		}
	});

	// 标签置顶
	$('.manage-tag').click(function () {
		showLayer($('#managetag'),['input']);
	});

	// 删除标签
	$('#managetag .ed .wp b').live('click',function () {
		var _parent = $(this).parents('.wp'),
			_cid = _parent.find('a').attr('cid');
		var queryStr = {'action':'delcat','cid':_cid};
		$.post('/ajax/ajax.brand.php',queryStr,function (data) {
			if(data.status == 1) {
				_parent.remove();
			} else {
				showMsg('删除失败！',3000);
			}
		},'json');
	});

	function doubleClick() {
		var _this = $(this),
			_txt = $.trim(_this.find('a').text()),
			_cid = _this.find('a').attr('cid');
			_parent = _this.parent(),
			_width = _this.outerWidth(),
			_height = _this.outerHeight(),
			_input = $('<input type="text" value="'+_txt+'" />');
		_input.css({width:_width,height:_height}).blur(function () {
			// Ajax 发送
			if($(this).val() == '') {
				showMsg('不能为空！',3000);
				return false;
			}
			if($(this).val().length > 5) {
				showMsg('不能多于5个字',3000);
				return false;
			}
			var _in = $(this);
			$.post('/ajax/ajax.brand.php',{'action':'editcat','cid':_cid,'name':$(this).val()},function (data) {
				if(data.status == 1) {
					var _a = $('<a href="javascript:void(0);" class="tag" cid="'+_cid+'">'+_in.val()+'</a>');
					_in.parents('.wp').append($('<b></b>'));
					_in.remove();
					_this.append(_a);
				} else {
					showMsg('修改失败！',3000);
				}
			},'json');
		});
		_this.width(_width);
		_this.height(_height);
		_this.find('a').remove();
		_parent.append(_input);
		_parent.find('b').remove();
		_parent.find('input').focus();
		return false;
	}

	function singleClick(ev) {
		var _this = $(this),
			_txt = _this.find('a').text(),
			_cid = _this.find('a').attr('cid');
		if($('div.add ul li').size() >= 5) {
			showMsg('最多只能添加5个',3000);
			return false;
		}
		var _cids = [];
		$('.add li a').each(function () {
			_cids.push($(this).attr('cid'));
		});
		if($.inArray(_cid,_cids) != -1) {
			showMsg('不能重复添加！',3000);
			return false;
		}
		$.post('/ajax/ajax.brand.php',{'action':'editTopcat','cid':_cid},function () {
			if(data.status == 1) {
				var _li = $('<li><a href="javascript:void(0);" class="tag" cid="'+_cid+'">'+_txt+'</a><b></b></li>').appendTo('div.add ul');
			} else {
				showMsg('添加失败！',3000);
			}
		},'json');
		return false
	}

	// 编辑标签
	$('#managetag .ed li').skygqOneDblClick({oneclick:singleClick,dblclick:doubleClick})

	$('#managetag .ed .wp').hover(
		function () {
			$(this).find('b').show();
		},
		function () {
			$(this).find('b').hide();
		}
	);

	// 置顶的标签
	$('div.add li').live('mouseenter',function () {
		$(this).find('b').show();
	}).live('mouseleave',function () {
		$(this).find('b').hide();
	});

	// 删除置顶标签
	$('div.add li b').live('click',function () {
		var _parent = $(this).parents('li'),
			_cid = _parent.find('a').attr('cid'),
			queryStr = {'action':'delTopcat','cid':_cid};
		$.post('/ajax/ajax.brand.php',queryStr,function (data) {
			if(data.status == 1) {
				_parent.remove();
			} else {
				showMsg('失败！',3000);
			}
		},'json');
	});
	
	// 修改 Banner
	$('div.adv div.tip').click(function () {
		var args = ['input'];
		var obj = $('#b');
		showLayer(obj,args);
	});

	// 添加产品
	$('div.products div.tip').click(function () {
		var args = ['input','select','textarea'];
		var obj = $('.addproduct');
		obj.find('.pics').empty();
		obj.find('.done').hide();
		$('#tpl_2 .addpic').clone(true).show().appendTo(obj.find('.pics'));
		showLayer(obj,args);
	});

	// 编辑产品
	$('a.editpro').click(function () {
		$('.ajaxEdit').remove();
		var queryStr = {'action':'edit_product','pid':$(this).attr('pid')};
		var _tpl = $.post('/ajax/ajax.product.php',queryStr,function (data) {
			showLayer($(data).appendTo('body'),['input','select','textarea']);
		});
		//setTimeout(function () {showLayer($('.ajaxEdit'),['input','select','textarea'])},100);
	});

	// 删除产品
	$('a.delpro').click(function () {
		var _cid = $(this).attr('pid');
		if(window.confirm('确定要删除吗？')) {
			window.location.href = '/ajax/ajax.product.php?action=delproduct&pid='+_cid;
		}
	});

	// 添加图片
	$('.addproduct input.upfile').live('mouseenter',function () {
			$(this).parent().addClass('cur');
	}).live('mouseleave',function () {
			$(this).parent().removeClass('cur');
	}).live('change',function () {
		// 获取图片 类型
		var imgType = $(this).val().substring($(this).val().lastIndexOf('.')).toLowerCase();
		var exts = ['.jpg','.png','.gif'];
		// 检测图片 类型
		if($.inArray(imgType,exts) == -1) {
			showMsg('图片格式只能是' + exts,3000);
			return false;
		}
		
		var _pic = $(this).parents('.wrap').find('.pic').show();
		if (navigator.userAgent.indexOf("MSIE") > 0 && !(navigator.userAgent.indexOf("MSIE 10.0") > 0)) {
			_pic.get(0).style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
			_pic.get(0).filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = getPath(this);
			_pic.find('.img').hide();
		} else {
			var _img = _pic.find('.img');
			_img.attr('src',getPath(this));
		}

		if($(this).parents('.addpic').size() > 0) {
			$(this).parents('.wrap').unwrap();
			$('div.done').show();
			$('p.tips').hide();
		}
		var _pic = $(this).parents('.wrap').find('.push').hide();

		// 复制追加
		$('#tpl .wrap').clone(true).show().insertAfter($(this).parents('.wrap'));
	}).live('click',function () {
		if($(this).parents('.wrap').siblings().size() >= 10) {
			showMsg('最多只能添加10张图片！',3000);
			return false;
		}
	});

	// 删除预览图片
	$('div.pics a.del').live('click',function () {
		$(this).parents('.wrap').remove();
	});

	// 富文本编辑
	$('div.editbtn').click(function () {
		var args = ['textarea'];
		var obj = $('#edit');
		showLayer(obj,args,true);
	});

	// 添加经销商
	$('div.addbtn').click(function () {
		var args = ['input','select','textarea'];
		var obj = $('#addmercant');
		obj.find('.result').empty();
		obj.find('form.s').get(0).reset();
		showLayer(obj,args);
	});

	// Tab 标签切换
	$('div.tab div.tit li').live('click',function () {
		var _this = $(this);
		_this.siblings().addClass('nobg').end().removeClass('nobg');
		var key = _this.index();
		_this.parents('div.tab').find('.option').hide().eq(key).show();
	});

	// 标签查找
	$('div.tag-bar a').click(function () {
		var _this = $(this);
		_this.siblings().removeClass('cur').end().addClass('cur');
		// 发送查询
	});

	// 搜索经销商
	$('#addmercant input.search-btn').click(function () {
		var _this = $(this);
		var queryStr = {'action':'search_dealer','brandname':_this.parents('#addmercant').find('input[name="keywords"]').val(),'bid':_this.parents('#addmercant').find('#bid').val()};

		$.post('http://brand.gtuu.com/ajax/ajax.brand.php',queryStr,function (data) {
			var _result = $(_this.parents('.option').find('.result'));
			_result.empty();
			if(data) {
				$.each(data,function (i,item) {
					var _tpl = $('#addmercant .tpl').clone(true).removeClass('tpl hide');
					_tpl.find('.respic').find('img').attr('src','http://file1.gtuu.com/adaptshoplogo/'+item.shopid+'.jpg');
					_tpl.find('.dname').text(item.dname);
					_tpl.find('.proname').text(item.proname);
					_tpl.find('.tel').text(item.tel);
					_tpl.find('.linkman').text(item.linkman);
					_tpl.find('.addbar').attr({'data-bid':_this.parents('#addmercant').find('#bid').val(),'data-shopid':item.shopid});
					_tpl.appendTo(_result);
				});
			} else {
				showMsg('没有您要搜索的结果！',3000);
			}
		},'json');
	});
	
	// 添加经销商
	$('#addmercant a.addbar').live('click',function () {
		var _this = $(this);
		var queryStr = {'action':_this.attr('data-action'),'bid':_this.attr('data-bid'),'shopid':_this.attr('data-shopid')};
		$.post('http://brand.gtuu.com/ajax/ajax.brand.php',queryStr,function (data) {
			if(data.status) {
				_this.parents('.res').remove();
			}
		},'json');
	});

	// Ajax 请求等待
	$loadMask = $("#load");
	$.ajaxSetup({
		timeout : 50000,
		cache: false,
		beforeSend: function() {
			$win = $(window);
			var x = (($win.width() - $loadMask.outerWidth()) / 2) + $win.scrollLeft() + "px";
			var y = (($win.height() - $loadMask.outerHeight()) / 2) + $win.scrollTop() + "px";
			$loadMask.css({left:x,top:y}).show();
		},
		complete: function() {
			$loadMask.hide();
		}
	});


});
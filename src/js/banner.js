var imgwidth=740;//图片宽度
		$(function(){
			var index = 0;
			// first() 将匹配元素集合缩减为集合中的第一个元素。
			// clone() 克隆
			$('.banner ul li').first().clone().appendTo('.banner ul');//克隆第一张图片添加到列表中去
			var length = $('.banner ul li').length;//返回判断的数量

			// 循环图片容器的数量 并向提示按钮的容器添加子元素
			for (var i = 0; i < length-4; i++) {
				$('.banner ol').append('<li></li>');
			}
			$('.banner ol li').first().addClass('on');

			// 鼠标触碰提示按钮
			$('.banner ol li').hover(function(){
				index = $(this).index();
				$('.banner ul').stop().animate({left:- index * imgwidth},800)
				$('.banner ol li').eq(index).addClass('on').siblings().removeClass('on');

			})

			// 自动轮播 加定时器
			var timer = setInterval(sliderTimer,2000)
			function sliderTimer(){
				index++;
				move()
			}

			// 给左右按钮绑定事件
			$('.btn_l').click(function(){
				index--
				move()
			})
			$('.btn_r').click(function(){
				index++
				move()
			})

			// 鼠标悬停事件
			$('.banner').hover(function(){
				clearInterval(timer)
			},function(){
				timer = setInterval(sliderTimer,2000)
			})

			// 移动事件
			function move(){
				if (index==length) {
					$('.banner ul').css({left:0});
					index = 1;
				}
				if(index ==-1){
					$('.banner ul').css({left:-(length-1)*imgwidth})
					index = length-2
				}
				$('.banner ul').stop().animate({left:- index * imgwidth},800)

				if (index==length-1) {
					// 如果索引值为最大值，那么就给第一个小圆点添加类名，其他兄弟删除类名
					$('.banner ol li').eq(0).addClass('on').siblings().removeClass('on');
				}else{
					$('.banner ol li').eq(index).addClass('on').siblings().removeClass('on');
				}
			}
		})
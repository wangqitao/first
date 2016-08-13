;(function($){
	var len=$("#index ul li").size(),
		n=0;
	//初始化函数
	inif();

	function inif(){
		$(".btn").on("click",function(){
			$(".btn").removeClass("bg");
			$(".btn").find("span").attr("class","fa fa-angle-down");
			$(this).addClass("bg");
			$(this).find("span").attr("class","fa fa-angle-up");
		})
		
		$("#container").on("click","a",function(e){
			//取消a标签的默认行为
			

			//获取点击的a标签的href属性值
			var getHref=$(this).attr("href");

			//获取点击的a标签的data-name属性值
			var getName=$(this).data("name");

			//设置当前header里面的h1的值
			$("#title").html(getName);

			//判断a标签的位置
			if($(this).parent().parent().is("#btns"))
			{
				var index=$(this).parent().index();
				$(".jdt").css({"-webkit-transform":"translate3d("+(index*100)+"%,0,0)","-webkit-transition":"transform 1s"});
			}else if(getHref=="#con3"){
				$(".header").hide();
			}

			//调取相应的页面
			$(getHref).css({"-webkit-transform":"translate3d(0,0,0)","-webkit-transition":"transform 1s"}).siblings().css({"-webkit-transform":"translate3d(100%,0,0)","-webkit-transition":"none"});
		})

		$("#index").on("swipeLeft",function(){
			n++;
			if(n>=len)
			{
				n=len-1;
			}
			//调用图片函数
			changeImg();
		}).on("swipeRight",function(){
			n--;
			if(n<=0)
			{
				n=0;
			}
			//调用图片函数
			changeImg();
		})

		

		function changeImg()
		{
			$("#index ul").css({"-webkit-transform":"translate3d("+(-n*33.33333333333333)+"%,0,0)","-webkit-transition":"transform .6s"});
			$("#index ol li").eq(n).addClass("bg").siblings().removeClass("bg");
			if(n==0)
			{
				$("#btn").css("background-color","#72b937");
			}else if(n==1)
			{
				$("#btn").css("background-color","#ff9200");
			}else if(n==2)
			{
				$("#btn").css("background-color","#e84144");
			}

		}
	}


	var i=0;
	setInterval(function(){

		i >= $("#lunTop ul li").length-1 ? i=0 : i++;

		var width=$("#lunTop ul li").width();

		$("#lunTop ul").css({
			"left" : -i*width+"px",
			"-webkit-transition":"all 1s"
		})
	},1000)
})(Zepto)
function removeClass(obj,className){
			
			if(obj.className!=''){
				var arrClassName=obj.className.split(' ');
				var _index=arrIndexOf(arrClassName,className);
				if(_index!=-1){
					arrClassName.splice(_index,1);
					obj.className=arrClassName.join(' ');
				}
			}
			
		}

		function addClass(obj,className){
			if(obj.className==''){
				obj.className=className;
			}else{
				var arrClassName=obj.className.split(' ');
				var _index=arrIndexOf(arrClassName,className);
				if(_index==-1){
					obj.className+=' '+className;
				}
				
			}
		}

		function arrIndexOf(arr,v){
			for(var i=0;i<arr.length;i++){
				if(arr[i]==v){
					return i;
				}
			}
			return -1;//没有找到则return -1
		}


function addEvent(obj,evt,fn){
		if(obj.addEventListener){
			obj.addEventListener(evt,fn,false);
		}else if(obj.attachEvent){
			obj.attachEvent('on'+evt,fn);
		}
}


var opcBtn=document.getElementById("pcBtn");
var omobileBtn=document.getElementById("mobileBtn");
var ochongzhiBtn=document.getElementById("chongzhi");
var olyAwardBtn=document.getElementById("ly_award");
var oryAwardBtn=document.getElementById("ry_award");
var olvyinGift=document.getElementById("lvyin_gift");
var ohonorGift=document.getElementById("honor_gift");
var oactiveRules=document.getElementById("active_rules");
var omChargeContent=document.getElementById("m_charge_content");
var omRewardList=document.getElementById("m_reward_list");
var omActiveRules=document.getElementById("m_active_rules");
var oalert=document.getElementById("alert");
var cz_flat=true;
var pc_flat=true;
var mobile_flat=true;
var ly_flat=true;
var ry_flat=true;


addEvent(opcBtn,"click",function(){

		removeClass(opcBtn,'pc');
		addClass(opcBtn,'pc_active');
		removeClass(omobileBtn,'mobile_active');
		addClass(omobileBtn,'mobile');
		
		removeClass(oactiveRules,"hide");
		removeClass(olvyinGift,"hide");
		removeClass(ohonorGift,'hide');
		addClass(omChargeContent,"hide");
		addClass(omRewardList,"hide");
		addClass(omActiveRules,"hide");
});


addEvent(omobileBtn,"click",function(){
	
		removeClass(opcBtn,'pc_active');
		addClass(opcBtn,'pc');
		addClass(omobileBtn,'mobile_active');
		removeClass(omobileBtn,'mobile');

		removeClass(omChargeContent,"hide");
		removeClass(omRewardList,"hide");
		removeClass(omActiveRules,'hide');
		addClass(oactiveRules,"hide");
		addClass(olvyinGift,"hide");
		addClass(ohonorGift,"hide");
});



addEvent(ochongzhiBtn,"click",function(){

	if(cz_flat){
		removeClass(ochongzhiBtn,'chongzhi');
		addClass(ochongzhiBtn,'chongzhi_active');
	}else{
		removeClass(ochongzhiBtn,'chongzhi_active');
		addClass(ochongzhiBtn,'chongzhi');
	}
	cz_flat=!cz_flat;
	
});


addEvent(olyAwardBtn,"click",function(){
	var olyImg=document.getElementById("ly_img");

	if(ly_flat){
	
		olyImg.src="./img/ly_award.png";
		removeClass(oalert,"alert");
	}else{
			olyImg.src="./img/ly_award_active.png";
	}
	ly_flat=!ly_flat;
	
});

addEvent(oryAwardBtn,"click",function(){
	var oryImg=document.getElementById("ry_img");

	if(ry_flat){
	
		oryImg.src="./img/ry_award_active.png";
	}else{
			oryImg.src="./img/ry_award.png";
	}
	ry_flat=!ry_flat;
	
});
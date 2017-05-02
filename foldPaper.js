window.onload=function()
{
	var oDiv=document.getElementById('container');
	var aDiv=oDiv.getElementsByTagName('div');
	var timer=null;
	var i=0;
	
	var onoff=true;
	 oDiv.onmouseover=function(){
	 	clearInterval(timer); //每次移入之前都要先清除定时器，否则会出问题
		var i=0;
		timer=setInterval(function(){
			aDiv[i].className="op";
			i++;
			if(i==aDiv.length){
				clearInterval(timer);
			}
		},100);//每个延迟100ms下来
		
	};   
	
	 oDiv.onmouseout=function(){
	 	clearInterval(timer);
	 	i=aDiv.length-1;
		timer=setInterval(function(){
			aDiv[i].className="clo";
			i--;
			if(i<0){
				clearInterval(timer);
				timer=null;
			}
		},100);//每个延迟100ms下来
	 }
};
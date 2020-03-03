window.onload = function(){
	var iconbox = document.querySelector(".icon-box");
	var oli = iconbox.querySelectorAll(".oli");
	for(var i = 0; i < oli.length; i++) {
		oli[i].w = 0;
		oli[i].t = 14;
		oli[i].h = 2;
		oli[i].onmouseenter = function() {
			var that = this;
			clearInterval(that.timer1);
			clearInterval(that.timer2);
			that.timer1 = setInterval(function() {
				that.w += 2;
				that.querySelector(".pagehome").style.width = that.w + "px";
				that.querySelector(".pagehome").style.height = 2 + "px";
				if(that.w >= 136) {
					clearInterval(that.timer1);
					clearInterval(that.timer2);
					that.timer2 = setInterval(function() {
						that.h += 2;
						that.t -= 1;
						that.querySelector(".pagehome").style.height = that.h + "px";
						that.querySelector(".pagehome").style.top = that.t + "px";
						if(that.h >= 93) {
							clearInterval(that.timer2);
							clearInterval(that.timer1);
						}
					}, 5)
				}
			}, 5)
		}
		oli[i].onmouseleave = function() {
			var that = this;
			clearInterval(that.timer1);
			clearInterval(that.timer2);
			
			that.timer2 = setInterval(function() {
				console.log(that)
				that.h -= 2;
				that.t += 1;
				that.querySelector(".pagehome").style.height = that.h + "px";
				that.querySelector(".pagehome").style.top = that.t + "px";
				if(that.h <= 2) {
					clearInterval(that.timer2);
					clearInterval(that.timer1);
					that.w = 136;
					that.timer1 = setInterval(function() {
						that.w -= 2;
						that.querySelector(".pagehome").style.width = that.w + "px";
						if(that.w <= 0) {
							clearInterval(that.timer1);
							clearInterval(that.timer2);
						}
					}, 5);
				}
			}, 5)
		}
	}
}


var btn = document.querySelector(".menu-btn");
var btn2 = document.querySelector(".menu-btn2");
var line4 = document.querySelector(".line4");
var line5 = document.querySelector(".line5");
var line6 = document.querySelector(".line6");
var box3 = document.querySelector(".box3");
var box4 = document.querySelector(".box4");
var a = 0;
btn.onclick = function (){
	
	btn.style.display="none";
	btn2.style.display="block";
	var timer1 = setInterval(fn,30);
	function fn(){
	line4.style.width="70%";
	line4.style.transform="rotate(-45deg)";
	line4.style.transformOrigin="right top";
	line4.style.transition="all 1s";
	line5.style.transition="all 0.5s";
	line5.style.opacity="0";
	line6.style.width="70%";
	line6.style.transform="rotate(45deg)";
	line6.style.transformOrigin="right bottom";
	line6.style.transition="all 1s";
	box3.style.left="85px";
	box3.style.transition="all 1s";
	box4.style.left="0";
	box4.style.transition="all 1s";
		
		clearInterval(timer1);
	}
	

}
 btn2.onclick = function (){
 	
 
 	var timer2 = setInterval(fu,50);
 	function fu(){
 		line4.style.width="100%";
	line4.style.transform="rotate(0deg)";
	line4.style.transformOrigin="right top";
	line4.style.transition="all 1s";
	line5.style.opacity="1";
	line5.style.width="100%";
	line5.style.transition="all 1s";
	line6.style.width="26px";
	line6.style.transform="rotate(0deg)";
	line6.style.transformOrigin="right bottom";
	line6.style.transition="all 1s";
	box3.style.left="-543px";
	box3.style.transition="all 1s";
	box4.style.left="-100%";
	box4.style.transition="all 1s";
	
		clearInterval(timer2);
 	}

	var timer3 = setInterval(fa,1000);
	function fa(){
		btn.style.display="block";
		btn2.style.display="none";
		clearInterval(timer3);
	}

 }
		
var im3 = document.querySelector(".im3");
im3.onclick = function(){
	
	var timer4 = setInterval(fu,50);
 	function fu(){
 		line4.style.width="100%";
	line4.style.transform="rotate(0deg)";
	line4.style.transformOrigin="right top";
	line4.style.transition="all 1s";
	line5.style.opacity="1";
	line5.style.width="100%";
	line5.style.transition="all 1s";
	line6.style.width="26px";
	line6.style.transform="rotate(0deg)";
	line6.style.transformOrigin="right bottom";
	line6.style.transition="all 1s";
	box3.style.left="-543px";
	box3.style.transition="all 1s";
	box4.style.left="-100%";
	box4.style.transition="all 1s";
	
		clearInterval(timer4);
 	}

	var timer5 = setInterval(fa,1000);
	function fa(){
		btn.style.display="block";
		btn2.style.display="none";
		clearInterval(timer5);
	}
	
	
}
var ul3 = document.querySelector(".ul3");
var oul3 = document.querySelectorAll(".oul3");
var li3 = document.querySelectorAll(".li3");
var oli3 = document.querySelectorAll(".oli3");
var a = 0;

for (var i = 0; i<li3.length;i++){
		
			li3[i].onmouseenter = function (){
				if( a == 0){
			this.style.overflow="visible";
			this.style.transition="all 0.5s";
			this.style.marginBottom="120px";
		   
		   	a = 1;
		   	console.log(a);
		}else{
			  a = 0;
			console.log(a);
			for(var j = 0;j<li3.length;j++){
				
				li3[j].style.overflow="hidden";
				li3[j].style.marginBottom="0px";
			}
			
			
			this.style.overflow="visible";
			this.style.marginBottom="120px";
		   	console.log("1");
		 
	}
	}
	

}

var im4 = document.querySelector(".im4");

var im4timer = setInterval(fm,3000);
var b = 0;
function fm (){
	if(b == 0){
		
	
	im4.style.width="calc(100% + 9.3%)";
	im4.style.height="316px";
	im4.style.top="-25px";
	im4.style.left="-59px";
	im4.style.transition="all 2s linear";
	b = 1;
	}else{
	b = 0;
	im4.style.width="100%";
	im4.style.height="266px";
	im4.style.top="0";
	im4.style.left="0";
	im4.style.transition="all 2s linear";
		
	}
}
var fbox = document.querySelector(".fbox");
var cbox = document.querySelectorAll(".cbox");
var  fbtmer;
var f = 0;
fbox.style.transition="left 0s";
fbox.style.left=0;
fbtmer = setInterval(lpfn,3000);
function lpfn(){
	f++;
	if(f<cbox.length){
		
		var fbtimer2 = setInterval(function(){
			
			fbox.style.transition="left 3s";
			fbox.style.left=-f*1200+"px";
			clearInterval(fbtimer2);
		},100);
		
		
		
	}else{
		f = 0;
		fbox.style.left="0px";
		fbox.style.transition="left 0s";
	}
	
	
}

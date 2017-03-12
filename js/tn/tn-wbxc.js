var tuBox=document.querySelectorAll(".tu-box");
var span=document.querySelectorAll(".tu-box span");
var flag=true;
for (var i = 0; i < tuBox.length; i++) {
	tuBox[i].index=i;
	tuBox[i].onclick=function(){
		if (flag) {
			span[this.index].id="";
			flag=false;
		}else{
			span[this.index].id="span";
			flag="true";
		};
	}
};
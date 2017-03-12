var contentLi=document.querySelectorAll(".content-box li");
for (var i = 0; i < contentLi.length; i++) {
	contentLi[i].index=i;
	contentLi[i].ontouchstart=function(){
		for (var j= 0; j < contentLi.length;j++){
			contentLi[j].style.background="url(images/tn/tn_10.png) no-repeat center center/cover"
		}
		contentLi[this.index].style.background="url(images/tn/tn_12.png) no-repeat center center/cover"
	}
};
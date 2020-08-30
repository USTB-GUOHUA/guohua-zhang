// var showList = document.getElementById("tabs").getElementsByTagName("li");
// console.log(showList);
// for(var i = 0; i< showList.length; i++){
//     showList[i].onmousemove = function(){
//         this.className = "submenu";
//     }
//     showList[i].onmouseout = function(){
//         this.className = "";
//     }
// }

// 二级菜单显示
var showList = document.getElementById("abc");

showList.onmousemove = function(){
    this.className = "show";
}
showList.onmouseout = function(){
    this.className = "";
}

// 返回顶部
var icon = document.getElementById("icon");
var Top;
var timer = null;

window.onscroll = function (){
    Top = document.documentElement.scrollTop || document.body.scrollTop;
    // console.log(Top);
    return Top;
}

icon.onclick = function(){
    timer = setInterval(function(){
        var speed = (0 - Top)/10;
        speed = speed > 0? Math.ceil(speed) : Math.floor(speed);
        
        if(Top == 0){
            clearInterval(timer);
        }

        document.documentElement.scrollTop = Top + speed;
        document.body.scrollTop = Top + speed;
    }, 30)
}

// @生硬方法
// icon.onclick = function(){
//     window.scrollTo(0, 0);
// }


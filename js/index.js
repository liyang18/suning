/**
 * Created by Administrator on 2017/12/28/028.
 */

// 轮播图
{
    // 轮播图
    let imgs=document.querySelectorAll(".imgs-box li");
    let pages=document.querySelectorAll(".lunbo-box li");
    pages.forEach(function(value,index){
        value.onclick=function(){
            for (var i=0;i<pages.length;i++){
                imgs[i].classList.remove("active");
                pages[i].classList.remove("active");
            }
            this.classList.add("active");
            imgs[index].classList.add("active");
            n=index;
        }
    })

    // 自动轮播
    let n=0;
    let banner=document.querySelector(".banner-center");
    function bannerfn(dir="r"){
       if(dir==="r"){
           n++;
           if(n===imgs.length){
               n=0;
           }
       }else if(dir==="l"){
           n--;
           if(n===-1){
               n=imgs.length-1;
           }
       }
        for (var i=0;i<pages.length;i++){
            pages[i].classList.remove("active");
            imgs[i].classList.remove("active");
        }
        pages[n].classList.add("active");
        imgs[n].classList.add("active");
    }
    let t=setInterval(bannerfn,5000);
    banner.onmouseover=function(){
        clearInterval(t);
    }
    banner.onmouseout=function(){
        t=setInterval(bannerfn,5000)
    }

    // 左右箭头
    let left=document.querySelector(".prev");
    let right=document.querySelector(".next");
    let flag=true;
    right.onclick=function(){
        if(flag){
            flag=false;
            bannerfn();
        }
    }
    left.onclick=function(){
        if(flag){
            flag=false;
            bannerfn("l");
        }

    }
    imgs.forEach(function(val,index){
        val.addEventListener("transitionend",function(){
            flag=true;
        });
    })
}
// 楼层跳转
{
    let flag=true;
    let totop=document.querySelector(".aside-di-1");
    totop.onclick=function(){
        let st = document.documentElement.scrollTop;
        let speed=st*30/400;
        let t=setInterval(function(){
            st-=speed;
            if(st<=0){
                st=0;
                clearInterval(t);
            }
            document.documentElement.scrollTop=st;
        },30)
    }


    let topbar = document.querySelector(".topbar");
    let leftbar = document.querySelector(".aside-nei");
    window.onscroll = function () {
        if(flag){
            let st = document.documentElement.scrollTop;
            // console.log(st);
            if (st >= 900) {
                topbar.style.top = "0";
            } else {
                topbar.style.top = "-50px";
            }
            if (st >= 2740) {
                leftbar.style.display = "block";
            } else {
                leftbar.style.display = "none";
            }
            lists.forEach(function (value, index) {
                if (st >= value.offsetTop-110) {
                    for (let i = 0; i < lists.length; i++) {
                        floors[i].classList.remove("active");
                    }
                    floors[index].classList.add("active");
                }
            })
        }
    }


    let lists = document.querySelectorAll(".lists");
    let floors = document.querySelectorAll(".aside-nei li");
    floors.forEach(function (ele, index) {
        ele.onclick = function () {
            let ot = lists[index].offsetTop;
            let now = document.documentElement.scrollTop;
            let speed = (ot - now) * 30 / 400;
            let time = 0;
            flag=false;
            let t = setInterval(function () {
                now += speed;
                time += 30;
                if (time === 300) {
                    clearInterval(t);
                    now = ot;
                    flag=true;
                }
                document.documentElement.scrollTop = now;
            }, 30)
        }
    })
}

// 侧导航
{
    let xuan=document.querySelectorAll(".luobo-neikuan-left>li");
    let ka=document.querySelectorAll('.luobo-neikuan .item-box');
    xuan.forEach(function(value,index){
        value.onmousemove=function(){
            for(let i=0;i<xuan.length;i++){
                ka[i].classList.remove('xianshi');
            }
            ka[index].classList.add("xianshi");
        }
        value.onmouseout=function(){
            for(let i=0;i<xuan.length;i++){
                ka[i].classList.remove('xianshi');
            }
        }
    })
}
// let dbyc=document.querySelector('.dbyc')
// let hui=document.querySelector('.aside3');
// let bigcdh=document.querySelector('.aside');
// let cdh=document.querySelectorAll('.aside .aside-kuai');
// let floor=document.querySelectorAll('.floor');
// let cdhflag=true;
// window.onscroll=function(){
//     let tops=document.body.scrollTop?document.body.scrollTop:document.documentElement.scrollTop
//     if(tops>=700){
        
//         dbyc.classList.add('eysrdb')
//     }
//     else if(tops<700){
        
//         dbyc.classList.remove('eysrdb')
//     }
//     if(!cdhflag){
//         return;
//     }
//     if(document.documentElement.scrollTop>=2200){
//             bigcdh.classList.add('active2');
//         }
//         if(document.documentElement.scrollTop<=2200){
//             bigcdh.classList.remove('active2');
//         }
//     hui.onclick=function () {
//             animate(document.body,{scrollTop:0});
//             animate(document.documentElement,{scrollTop:0});
//         };
//     floor.forEach(function(val,ind){
//         if(floor[ind].offsetTop<=document.documentElement.clientHeight+document.documentElement.scrollTop-310){
//             cdh.forEach(function(value,index){
//                 value.classList.remove('aside-active')
//             })
//             cdh[ind].classList.add('aside-active')
//         }   
//     })
    
// }
// cdh.forEach(function (value1,index1) {
//             cdh[index1].onclick = function () {
//                     cdhflag=false;
//                     cdh.forEach(function(value,index){
//                         value.classList.remove('aside-active')
//                     })
//                     cdh[index1].classList.add('aside-active')
//                     animate(document.body,{scrollTop:floor[index1].offsetTop});
//                     animate(document.documentElement,{scrollTop:floor[index1].offsetTop-48},function(){
//                         cdhflag=true;
//                     });
//             }
// })
// 大聚惠
let djhtu=document.querySelectorAll('.dajvhui-bottom');
let djhzi=document.querySelectorAll('.dajvhui-top-mid-a-l')
djhzi.forEach(function(val,ind){
    val.onmouseenter=function(){
        djhzi.forEach(function(value,index){
            value.classList.remove('djhact')
        })
        djhtu.forEach(function(value,index){
            value.classList.remove('djhtuact')
        })
        djhtu[ind].classList.add('djhtuact')
        djhzi[ind].classList.add('djhact')
    }
})
//视频轮播
{
   let now=0;
    let next=0;
    let flag=true;
    let small=document.querySelector('.small');
    let width=parseInt(getComputedStyle(small,null).width);
    let lis=document.querySelectorAll('.lis');
    function move(){
        next=now+1
        if(next>=lis.length){
            next=0;
        }
        lis[next].style.left=width+"px";
        lis[next].classList.remove('active');
        lis[now].classList.add('active');
        animate(lis[now],{left:-width});
        animate(lis[next],{left:0},function(){
            flag=true;
        });
        now=next;
    }
    let t=setInterval(move,2000);
    small.onmouseenter=function(){
        clearInterval(t);
    }
    small.onmouseleave=function(){
        t=setInterval(move,2000);
    }
    let lef=document.querySelector('.left');
    let righ=document.querySelector('.right');
    document.querySelector('.right').onclick=function(){
        if(!flag){
            return;
        }
        flag=false;
        move();
    }
    document.querySelector('.left').onclick=function(){
        if(!flag){
            return;
        }
        flag=false;
        next=now-1
        if(next<0){
            next=lis.length-1;
        }
        lis[next].style.left="-100%";
        animate(lis[now],{left:width});
        animate(lis[next],{right:0},function(){
            flag=true;
        });
        now=next;
    }

}
//排行榜轮播
{
  let now=0;
  let next=0;
  let flag=true;
  // let box=document.querSelectorAll("boxzz");
  let lefts=document.querySelector('.btn btn-left');
  let rights=document.querySelector('.btn btn-right');
  // let width=parseInt(getComputedStyle(content,null).width);
  let lis=document.querySelectorAll(".list-ul li");
  let circles=document.querySelectorAll('.yuan a');
  function move(){
        next=now+1
        if(next==lis.length){
            next=0;
        }
        lis[next].style.left=width+"px";
        animate(lis[now],{left:-width});
        animate(lis[next],{left:0},function(){
            flag=true;
        });
        circles[now].classList.remove('active');
        circles[next].classList.add('active');
        now=next;
    };
    let t=setInterval(move,2000);
    small.onmouseenter=function(){
        clearInterval(t);
    }
    small.onmouseleave=function(){
        t=setInterval(move,2000);
    }
    let lef=document.querySelector('.btn btn-left');
    let righ=document.querySelector('.btn btn-right');
    document.querySelector('.right').onclick=function(){
        if(!flag){
            return;
        }
        flag=false;
        move();
    }
    document.querySelector('.left').onclick=function(){
        if(!flag){
            return;
        }
        flag=false;
        next=now-1
        if(next<0){
            next=lis.length-1;
        }
        lis[next].style.left="-100%";
        animate(lis[now],{left:width});
        animate(lis[next],{left:0},function(){
            flag=true;
        });
        circle[now].classList.remove("active");
        circle[next].classList.add("active");
        now=next;
    }
    for( let i=0;i<circles.length;i++){
       circles[i].onclick=function(){
        if(!flag){
            return;
        }
        flag=false;
            next=i;
            if(i>now){
                lis[next].style.left="100%";
                animate(lis[now],{left:-width});
                animate(lis[next],{left:0},function(){
                    flag=true;
                });
                circles[now].classList.remove('active');
                circles[next].classList.add('active');
                now=next;    
                      
            }else if(i<now){
                lis[next].style.left=-width+"px";
                animate(lis[now],{left:width});
                animate(lis[next],{left:0},function(){
                    flag=true;
                });
                circles[now].classList.remove('active');
                circles[next].classList.add('active');
                now=next;      
            }else{
                flag=true;
            }
       }
 
   }
}

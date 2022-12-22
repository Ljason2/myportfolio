import $ from 'jquery'
 
$(function(){

let windowW=$(window).width()
// 웹

console.log(windowW)

if(1545<=windowW){
    nav()
    submenu()
}
// 웹에서 태블릿으로 가는 과정
else if(980 <= windowW && windowW < 1545){
    nav()
    submenu()
}

// 태블릿
else if(580 <=windowW && windowW<979){
    tNav()
    gallery()
}

// 모바일
else if(windowW<579){
    tNav()
    gallery()
}

// 공통
// reset : 포트폴리오

$(window).on('resize',function(e){
window.location.reload();
})


//
})

//  web nav
function nav(){

$('nav li>a').on('click',function(e){
    const navA=$(this).attr('href');
    const aPos= $(navA).offset().top ;
    const headerHeight =$('header').innerHeight();
    $('html,body').animate({scrollTop:aPos - headerHeight},800);
    return false;
})
}
// table,mobil nav
function tNav(){

    let navW=$('nav').width()

        // .btn click
    $('header .btn').on('click',function(e){
        $('nav').animate({left:0},500)
        $(this).hide()

    })



    // scroll

    $('nav li>a').on('click',function(e){
        const navA=$(this).attr('href');
        const aPos= $(navA).offset().top ;
        const headerHeight =$('header').innerHeight();
        $('html,body').animate({scrollTop:aPos - headerHeight},800);
        $('nav').css('left','-'+navW+'px')
        $('header .btn').show();
        return false;
    })


    // close

    $('nav .close').on('click',function(e){
        $('nav').css('left','-'+navW+'px')
        $('header .btn').show();
    })
}


function submenu(){
// html 연결
//jquery 
$('aside li>a').on('click',function(e){
const asideA=$(this).attr('href');
const asidePos=$(asideA).offset().top;
const headerHeight=$('header').innerHeight();
$('html,body').animate({scrollTop:asidePos- headerHeight},800);
return false;
})
}



function gallery(){

// 준비하기
const figureW=$('#box04 #all figure').width();
$('#all figure:last').prependTo('#all')
$('#all').css('margin-left','-'+figureW+'px')


// 이벤트
$('#gallery .prev').on('click',function(e){
    $('#all').animate({marginLeft:'-='+figureW+'px'},400,function(){
        $('#all figure:first').appendTo('#all')
        $('#all').css('margin-left','-'+figureW+'px')    
    })
    })
    
    $('#gallery .next').on('click',function(e){
    $('#all').animate({marginLeft:'+='+figureW+'px'},400,function(){
        $('#all>figure:last').prependTo('#all')
        $('#all').css('margin-left','-'+figureW+'px')
    })
    })
}






//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// modal 클릭하면 화면 나오게 하기.

const h4=document.querySelector('#modal h4');
const img=document.querySelector('#modal figure>img');
const day=document.querySelector('#modal dl .year');
const pro=document.querySelector('#modal dl .program');
const url=document.querySelector('#modal dl .link>a');
const content=document.querySelector('#modal dl .text');
const fig=document.querySelector('#modal figcaption')

const open=document.querySelectorAll('#all>figure')
// console.log(open)
const close=document.querySelector('#modal>.close')
// console.log(close)
const modal=document.querySelector('#modal')



// 객체를 생성자 함수로 만들 것
function Modal(title,pic,year,program,href,text,fig){
    this.title=title;
    this.pic=pic;
    this.year=year;
    this.program=program;
    this.href=href;
    this.text=text;
    this.fig=fig;
}






// 매서드

// 객체안에 있는 정보를 수정하는 행위
Modal.prototype.action=function(){
h4.innerHTML=this.title;
img.setAttribute('src',this.pic);
day.innerHTML=this.year;
pro.innerHTML=this.program;
url.setAttribute('href',this.href);
url.innerHTML=this.href;
content.innerHTML=this.text;
fig.innerHTML=this.fig;
}



// 인스턴스
let myModal=[
new Modal('title01','./images/pic01.png','2022','프로그램1','http://aaa1.com','내용1','작업물1'),
new Modal('title02','./images/pic02.png','2021','프로그램2','http://aaa2.com','내용2','작업물2'),
new Modal('title03','./images/pic03.png','2023','프로그램3','http://aaa3.com','내용3','작업물3'),
new Modal('title04','./images/pic04.png','2024','프로그램4','http://aaa4.com','내용4','작업물4'),
new Modal('title05','./images/pic01.png','2025','프로그램5','http://aaa5.com','내용5','작업물5'),
new Modal('title06','./images/pic02.png','2026','프로그램6','http://aaa6.com','내용6','작업물6')
]






// event->작업 ->click(figure,figure>img,#modal>.close)


// 여러개를 클릭해야되니까 forEach를 써야함.
open.forEach(function(item,index){
item.onclick=function(){
    modal.style.display='block'
    myModal[index].action();
}
})


// 한개만 클릭해도 되니까 forEach 안씀.
close.onclick=function(){
    modal.style.display='none';
}


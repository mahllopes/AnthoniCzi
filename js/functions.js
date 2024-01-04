var width = $(window).width(); 
window.onscroll = function(){
if ((width >= 1000)){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $("#header").css("background","rgb(36, 36, 36)");
        $("#header").css("color","rgb(255, 255, 255)");
        $("#header").css("box-shadow","0px 0px 20px rgba(36, 36, 36, .09)");
        $("#header").css("padding","4vh 4vw");
        $("#navigation a").hover(function(){
            $(this).css("border-bottom","2px solid rgb(153,87,216)");
        },function(){
            $(this).css("border-bottom","2px solid transparent");
        });
    }else{
        $("#header").css("background","transparent");
        $("#header").css("color","rgb(255,255,255)");
        $("#header").css("box-shadow","0px 0px 0px rgba(36, 36, 36,0)");
        $("#header").css("padding","6vh 4vw");
        $("#navigation a").hover(function(){
            $(this).css("border-bottom","2px solid rgb(153,87,216)");
        },function(){
            $(this).css("border-bottom","2px solid transparent");
        });
    }
}
}

/*function magnify(imglink){
    $("#img_here").css("background",`url('${imglink}') center center`);
    $("#magnify").css("display","flex");
    $("#magnify").addClass("animated fadeIn");
    setTimeout(function(){
        $("#magnify").removeClass("animated fadeIn");
    },800);
}

function closemagnify(){
    $("#magnify").addClass("animated fadeOut");
    setTimeout(function(){
        $("#magnify").css("display","none");
        $("#magnify").removeClass("animated fadeOut");
        $("#img_here").css("background",`url('') center center`);
    },800);
}*/

setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
    },800);
},1650);

$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('body,html').animate({
        scrollTop: $(hash).offset().top
        }, 1800, function(){
        window.location.hash = hash;
       });
       } 
      });
  });
  
  
document.addEventListener('DOMContentLoaded', function () {
    const openPopupButton1 = document.getElementById('openPopup1');
    const closePopupButton1 = document.getElementById('closePopup1');
    const popup1 = document.getElementById('popup1');

    openPopupButton1.addEventListener('click', function () {
        popup1.style.display = 'block';
    });

    closePopupButton1.addEventListener('click', function () {
        popup1.style.display = 'none';
    });

    const openPopupButton2 = document.getElementById('openPopup2');
    const closePopupButton2 = document.getElementById('closePopup2');
    const popup2 = document.getElementById('popup2');

    openPopupButton2.addEventListener('click', function () {
        popup2.style.display = 'block';
    });

    closePopupButton2.addEventListener('click', function () {
        popup2.style.display = 'none';
    });

    const openPopupButton3 = document.getElementById('openPopup3');
    const closePopupButton3 = document.getElementById('closePopup3');
    const popup3 = document.getElementById('popup3');

    openPopupButton3.addEventListener('click', function () {
        popup3.style.display = 'block';
    });

    closePopupButton3.addEventListener('click', function () {
        popup3.style.display = 'none';
    });

    const openPopupButton4 = document.getElementById('openPopup4');
    const closePopupButton4 = document.getElementById('closePopup4');
    const popup4 = document.getElementById('popup4');

    openPopupButton4.addEventListener('click', function () {
        popup4.style.display = 'block';
    });

    closePopupButton4.addEventListener('click', function () {
        popup4.style.display = 'none';
    });

    const openPopupButton5 = document.getElementById('openPopup5');
    const closePopupButton5 = document.getElementById('closePopup5');
    const popup5 = document.getElementById('popup5');

    openPopupButton5.addEventListener('click', function () {
        popup5.style.display = 'block';
    });

    closePopupButton5.addEventListener('click', function () {
        popup5.style.display = 'none';
    });
});

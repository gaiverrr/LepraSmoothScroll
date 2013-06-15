// ==UserScript==
// @name		Lepra Scroll Extension
// @version		1
// @description	Adds smooth scroll to top of the current page
// @author		gaiverrr
// @namespace	LepraSmoothScrollExt
// @match	*.leprosorium.ru/*
// ==/UserScript==

function LepraScroll(){
    var div = $('<div id="smoothScrollBlock" style="display: none;"><div id="arrow-up"></div><div id="top-text">Наверх</div></div>');

    if (document.body.firstChild)
        document.body.insertBefore(div[0], document.body.firstChild);
    else
        document.body.appendChild(div[0]);

    var scrollBlock = $('#smoothScrollBlock');
    $(window).scroll(function () { 
        if ($(this).scrollTop() > 750) 
            scrollBlock.fadeIn();  
        else                           
            scrollBlock.fadeOut(400);  

        scrollBlock.click(function(){
            $('html, body').stop().animate({ scrollTop: 0 }, 400);
        });
    });
}

window.onload = LepraScroll();

//设置封面标题
function setCoverText(){
    $('.imgWrap').each(function(){

        if($(this).find('.oneText').length){
            let curDom = $(this).find('.oneText'),
            t = curDom.attr('text').substring(0,1);
            $(this).find('.oneText').text(t.toUpperCase())
        }

    });
}//setCoverText

$(document).ready(function(){
    setCoverText();
 });
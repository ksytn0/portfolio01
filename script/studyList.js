//학습아이콘에 마우스오버시 둥실둥실

$(document).ready(function(){
    let studyIcon = $('.folderBox');

    studyIcon.mouseenter(function(){
        let i = $(this).find('img').eq(1);
        console.log(i);

        i.animate({'top':'-30px'},500);
    });

    studyIcon.mouseleave(function(){
        let i = $(this).find('img').eq(1);
        console.log(i);

        i.animate({'top':'-15px'},500);
    });


});
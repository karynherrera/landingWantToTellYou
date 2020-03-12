$(document).ready(function() {
    
})
/*
$('.btn-show-more').on("click", function () {
    console.log($(this).text());
})
*/
$('.btn-show-more').click(function(){
    $(this).text(function(i,old){
        return old=='VER MENOS' ?  'VER MÁS' : 'VER MENOS';
    });
});
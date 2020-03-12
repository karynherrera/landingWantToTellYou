$(document).ready(function() {
    
})

$('.btn-show-more').click(function(){
    $(this).text(function(i,old){
        return old=='VER MENOS' ?  'VER MÁS' : 'VER MENOS';
    });
});
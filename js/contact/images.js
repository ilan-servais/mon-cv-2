// Rend les images visibles après un certain délai
$(document).ready(function() {
    setTimeout(function() {
        $(".img-container img").css("opacity", "0").each(function(index) {
            $(this).delay(500 * index).animate({ opacity: 1 }, 3000);
        });
    }, 1500);
});

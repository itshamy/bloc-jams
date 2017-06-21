 var animatePoints = function() {
   var revealPoint = function() {
            $(this).css({
    transform: "translate3d(0, 0, 0)",
    transition: "transform 0.8s",
    opacity: 1
    });
};
$.each($('.point'), revealPoint);
};

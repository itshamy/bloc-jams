var revealPoint = function(){
  var points = document.getElementsByClassName('point');
  for (var i = 0; i < points.length; i++){
    points[i].style.transform = "translate3d(0, 0, 0)";
    points[i].style.transition = "transform 0.8s";
    points[i].style.opacity = 1;

  }
};

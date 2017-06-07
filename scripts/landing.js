var points = document.getElementsByClassName('point');
var revealPoint = function(points){
  for (var i = 0; i < points.length; i++){
    points[i].style.transform = "translate3d(0, 0, 0)";
    points[i].style.transition = "transform 0.8s";
    points[i].style.opacity = 1;

  }
};

window.onload = function() {
  if (window.innerHeight > 950) {
         animatePoints(pointsArray);
     }
  var sellingPoints = document.getElementsByClassName('selling-points')[0];
  var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;


  window.addEventListener('scroll', function(event) {
    if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
         revealPoint(points);
       }
   });
}

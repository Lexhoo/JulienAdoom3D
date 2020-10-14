var viewport = document.getElementsByClassName('viewport')[0]
var video = document.getElementById('video')
viewport.addEventListener('mouseover', function() {
    video.play()
}, false);
viewport.addEventListener('mouseout', function() {
    video.pause()
}, false);

function mytest() {
    alert("wolopgothgkorhro");
    console.log("weweweweweww");
}



$scope.playVideo = function() {
    // ...
    $scope.hasOverlayBeenClicked = true;
}


$('#video-gallery').lightGallery();

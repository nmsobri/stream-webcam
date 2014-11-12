(function(){

	var video = document.getElementById('video');
	var vendorUrl = window.URL || window.webkitURL;

	navigator.getMedia = navigator.gerUserMedia || 
						 navigator.webkitGetUserMedia ||
				    	 navigator.mozGetUserMedia ||
						 navigator.msGetUserMedia;

	navigator.getMedia({
		video:true,
		audio:false
	}, function(stream){
		video.src = vendorUrl.createObjectURL(stream);
		video.play();
	}, function(error){
		//too lazy too handle error..
	});

})()

function loadTheImgs(e){
	if(e.hasAttribute('data-lzbgimg')){
		let bgImg = e.dataset.lzbgimg;
		e.style.backgroundImage = 'url(' + bgImg + ')';
	}
	if(e.hasAttribute('data-lzimg')){
		e.setAttribute('src', e.getAttribute('data-lzimg'));
	}
}

document.addEventListener("DOMContentLoaded", function(){
	const obsrvConfig = {
		rootMargin: '50px 0px',
		threshold: 0.01
	};
	//get images wish to be lazyloaded
	const lazyImages = document.querySelectorAll('.lazyloadimg');
	//make sure they are really there
	if(lazyImages.length > 0){
		//if IntersectionObserver not supported load all images
		if(!window.IntersectionObserver){
			lazyImages.forEach(lazyImage => loadTheImgs(lazyImage));
		}else{
			let observer = new IntersectionObserver((entries) => {
				entries.forEach(entry => {
					if(entry.intersectionRatio > 0){
						loadTheImgs(entry.target)
					}
				})
			}, obsrvConfig);
			lazyImages.forEach(lazyImage => {observer.observe(lazyImage)});
		}
	}
});
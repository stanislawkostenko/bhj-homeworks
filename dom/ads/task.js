const adversity = document.querySelectorAll('.rotator__case');
let counter = 1;

const changeAds = function(adversity) {
    setInterval(() => {
        for (let i = 0; i < adversity.length; i++) {
            for (let l = 0; l < adversity.length; l++) {
                adversity[l].classList.remove('rotator__case_active');

			      }
			      adversity[counter].classList.add('rotator__case_active');

		    }
		    counter++;
    }, 1000);
}

changeAds(adversity);

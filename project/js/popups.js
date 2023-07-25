const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body'); 
const lockpadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function (e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	}
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon [index];
		el.addEventListener ('click', function (e) {
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	}
}

function popupOpen (curentPopup) {
	if (curentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popurClose(popupActive, false);
		} else {
			bodyLock();
		}
		curentPopup.classList.add('open');
		curentPopup.addEventListener("click", function (e) {
			if (!e.target.closest('.popup_content')) {
				popupClose(e.target.closest('.popup'));
			}
		});
	}
} 

function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if (doUnlock) {
			bodyUnlock();
		}
		
		// if (game_snake.style.visibility=='visible') 
		// game_snake.style.visibility='hidden';
	
		// if (swape.style.visibility == 'visible')
		// swape.style.visibility='hidden';
	}
}

function bodyLock() {
	const lockpaddingvalue = Window.innerWidth - document.querySelector('.header').offsetWidth + 'px';
	if (lockpadding.length > 0) {
		for (let index = 0; index <lockpadding.length; index++) {
			const el = lockpadding[index];
				el.style.paddingRight = lockpaddingvalue;
		}
	}
	body.style.paddingRight = lockpaddingvalue;
	body.classList.add('lock');
	
	unlock = false;
	setTimeout (function() {
		unlock = true;
	}, timeout);
}

function bodyUnlock () {
	setTimeout(function () {
		if (lockpadding.length>0){
			for (let index = 0; index <lockpadding.length; index++) {
				const el = lockpadding[index];
				el.style.paddingRight = '0px';
			}
		}
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);
	
	unlock = false;
	setTimeout (function() {
		unlock = true;
	}, timeout);
}

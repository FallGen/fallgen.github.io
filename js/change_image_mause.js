function fnc_mouse(event) {
	let ID = event.target.id;
	switch (ID) {
		case 'wa_icon':
		kontacts_bg.style.backgroundImage = "url('image/bg_wa.jpg')";
		break;

		case 'steam_icon':
		kontacts_bg.style.backgroundImage = "url('image/bg_steam.jpg')";
		break;
		
		case 'tiktok_icon':
		kontacts_bg.style.backgroundImage = "url('image/bg_tiktok.jpg')";
		break;
		
		case 'tg_icon':
		kontacts_bg.style.backgroundImage = "url('image/bg_tg.jpg')";
		break;
		
		case 'coub_icon':
		kontacts_bg.style.backgroundImage = "url('image/bg_coub.jpg')";
		break;
		
		case 'github_icon':
		kontacts_bg.style.backgroundImage = "url('image/bg_github.jpg')";
		break;
		
		case 'youtube_icon':
		kontacts_bg.style.backgroundImage = "url('image/bg_youtube.png')";
		break;
		
		case 'fl_icon':
		kontacts_bg.style.backgroundImage = "url('image/bg_fl.jpg')";
		break;
		
		case 'instagram_icon':
		kontacts_bg.style.backgroundImage = "url('image/bg_instagram.png')";
		break;
		
		case 'vk_icon':
		kontacts_bg.style.backgroundImage = "url('image/bg_vk.jpg')";
		break;
	}
}
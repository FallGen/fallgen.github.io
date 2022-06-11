let photo_value = 122;
let  mas_photo = [""];
	for (let index = 1; index <= photo_value; index++)
		mas_photo[index] = index;
	for (let index = 1; index <= photo_value; index++) {
		let rnd_value = getRandomInt(1, photo_value);
		let temp = mas_photo[index]; 
		mas_photo[index] = mas_photo[rnd_value];
		mas_photo[rnd_value] = temp;
	}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function load_photo(){
	let block_photo = document.querySelector('.gallery-list');

	for (let index = 1; index <= photo_value; index++) {
		
		// создание тега а
		let add_a = document.createElement("a");
		
		add_a.setAttribute(	'class', 'gallery-item');
		add_a.setAttribute(	'id', 'gallery-item' + index);
		add_a.setAttribute(	'href', 'photo_gallery/photo ('+ mas_photo[index] + ').jpg');
		add_a.setAttribute(	'alt', 'alt');
		block_photo.appendChild(add_a);


		let photo = document.getElementById("gallery-item" + index);
		
		// создание тега див1
		let add_div_gallery = document.createElement("div");
		
		add_div_gallery.setAttribute( 'class', 'gallery-item-hover');
		add_div_gallery.innerHTML = 'Посмотреть';		
		photo.appendChild(add_div_gallery);
		
		// создание тега див2
		let add_div_photo = document.createElement("div");
		
		add_div_photo.setAttribute( 'id', 'photo'+ index);
		add_div_photo.setAttribute( 'class', 'photo');
		photo.appendChild(add_div_photo);
		
		
		let div_photo = document.getElementById("photo"+ index);

		// создание тега имг
		let add_photo = document.createElement("img");
		
		add_photo.setAttribute(	'src', 'photo_gallery/photo ('+ mas_photo[index] + ').jpg');
		add_photo.setAttribute(	'alt', 'alt');
		div_photo.appendChild(add_photo);		

		}

}

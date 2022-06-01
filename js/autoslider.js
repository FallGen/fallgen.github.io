AutoSlide();
var i = 1;
let  img = ["url('image/skill1.jpg')"];
let  img_text = ["MS Office - крайне важное удобное и полезное программное обеспечение в наше время, без которого невозможно выполнить никакую работу. Поэтому для повышения своего личного скилла мною было принято решение начать изучать данное программное обеспечение. Таким образом был достигнут требуемый результат, а именно: были изучены основы MS office, поняты основы ГОСТов, а так же изучен ЯП VBA."];

my_skill.style.backgroundImage = img[0];
document.getElementById("skill_text").innerHTML = img_text[0];
id_indicator_1.style.background = "red";

function AutoSlide() {
	let img = ["url('image/skill1.jpg')", "url('image/skill2.jpg')", "url('image/skill3.jpg')", "url('image/skill4.jpg')", "url('image/skill5.jpg')"];
	let img_text = ["MS Office - крайне важное удобное и полезное программное обеспечение в наше время, без которого невозможно выполнить никакую работу. Поэтому для повышения своего личного скилла мною было принято решение начать изучать данное программное обеспечение. Таким образом был достигнут требуемый результат, а именно: были изучены основы MS office, поняты основы ГОСТов, а так же изучен ЯП VBA.","C# - великолепный язык программирования с удобным IDE и легкопонимающим синтексом ЯП. Благодаря C# мною было реализованно куча полезных проектов, которые актуальны по сей день. Так, например, можно выделить проект-программу расчёта оценки работоспособности метрик собственного бизнеса.","After Effects - чудеснейшая программа для работы с графикой. Этот мощный инструмент позволил мне приобрести бесценные навыки в видеомонтаже, видеодизайне и моушен-дизайне.","Html and Css - весьма сложный язык разметки, который дался мне с небольшим трудом, но я рад, что моей целеустремленности нет придела, поэтому даже язык разметки был покорен мною.","Java - язык программирования, который остался в воспоминаниях как ЯП, который хорош для подключения MS Access (базы данных) к своему приложению и работы с ней."];
	
	my_skill.style.backgroundImage = img[i];
	document.getElementById("skill_text").innerHTML = img_text[i];
	
	switch(i) {
		case 0: method_clear();
		id_indicator_1.style.background = "red";
		break;
		case 1: method_clear();
		id_indicator_2.style.background = "red";
		break;
		case 2: method_clear();
		id_indicator_3.style.background = "red";
		break;
		case 3: method_clear();
		id_indicator_4.style.background = "red";
		break;
		case 4: method_clear();
		id_indicator_5.style.background = "red";
		break;
	}
	
	i++;
	if (i == img.length) {
		i = 0;
	}
	
	setTimeout(AutoSlide, 8000);
}

function method_clear() {
	id_indicator_5.style.background = "white";
	id_indicator_4.style.background = "white";
	id_indicator_3.style.background = "white";
	id_indicator_2.style.background = "white";
	id_indicator_1.style.background = "white";
}
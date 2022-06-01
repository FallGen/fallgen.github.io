function choice_skill(obj) {
	
	id_indicator_1.style.background = "white";
	id_indicator_2.style.background = "white";
	id_indicator_3.style.background = "white";
	id_indicator_4.style.background = "white";
	id_indicator_5.style.background = "white";
	
	var id_skills = obj.id;
	
	if (id_skills == "id_skill_1") {
	document.getElementById("skill_text").innerHTML = "MS Office - крайне важное удобное и полезное программное обеспечение в наше время, без которого невозможно выполнить никакую работу. Поэтому для повышения своего личного скилла мною было принято решение начать изучать данное программное обеспечение. Таким образом был достигнут требуемый результат, а именно: были изучены основы MS office, поняты основы ГОСТов, а так же изучен ЯП VBA.";
	my_skill.style.backgroundImage = "url('image/skill1.jpg')";
	id_indicator_1.style.background = "red";
	}
	else
		if (id_skills == "id_skill_2") {
	document.getElementById("skill_text").innerHTML = "C# - великолепный язык программирования с удобным IDE и легкопонимающим синтексом ЯП. Благодаря C# мною было реализованно куча полезных проектов, которые актуальны по сей день. Так, например, можно выделить проект-программу расчёта оценки работоспособности метрик собственного бизнеса.";
	my_skill.style.backgroundImage = "url('image/skill2.jpg')";
	id_indicator_2.style.background = "red";

	}
	else
		if (id_skills == "id_skill_3") {
	document.getElementById("skill_text").innerHTML = "After Effects - чудеснейшая программа для работы с графикой. Этот мощный инструмент позволил мне приобрести бесценные навыки в видеомонтаже, видеодизайне и моушен-дизайне.";
	my_skill.style.backgroundImage = "url('image/skill3.jpg')";
	id_indicator_3.style.background = "red";
	}
	else
		if (id_skills == "id_skill_4") {
	document.getElementById("skill_text").innerHTML = "Html and Css - весьма сложный язык разметки, который дался мне с небольшим трудом, но я рад, что моей целеустремленности нет придела, поэтому даже язык разметки был покорен мною.";
	my_skill.style.backgroundImage = "url('image/skill4.jpg')";
	id_indicator_4.style.background = "red";
	}
	else
		if (id_skills == "id_skill_5") {
	document.getElementById("skill_text").innerHTML = "Java - язык программирования, который остался в воспоминаниях как ЯП, который хорош для подключения MS Access (базы данных) к своему приложению и работы с ней.";
	my_skill.style.backgroundImage = "url('image/skill5.jpg')";
	id_indicator_5.style.background = "red";
	}
	else
	{
		document.getElementById("skill_text").innerHTML = "непредвиденная ошибка";
	}
	
	
}
	

	
/*
MS Office - крайне важное удобное и полезное программное обеспечение в наше время, без которого невозможно выполнить никакую работу. Поэтому для повышения своего личного скилла мною было принято решение начать изучать данное программное обеспечение. Таким образом был достигнут требуемый результат, а именно: были изучены основы MS office, поняты основы ГОСТов, а так же изучен ЯП VBA.

C# - великолепный язык программирования с удобным IDE и легкопонимающим синтексом ЯП. Благодаря C# мною было реализованно куча полезных проектов, которые актуальны по сей день. Так, например, можно выделить проект-программу расчёта оценки работоспособности метрик собственного бизнеса.

After Effects - чудеснейшая программа для работы с графикой. Этот мощный инструмент позволил мне приобрести бесценные навыки в видеомонтаже, видеодизайне и моушен-дизайне. 

Html and Css - весьма сложный язык разметки, который дался мне с небольшим трудом, но я рад, что моей целеустремленности нет придела, поэтому даже язык разметки был покорен мною.

Java - язык программирования, который остался в воспоминаниях как ЯП, который хорош для подключения MS Access (базы данных) к своему приложению и работы с ней.
*/
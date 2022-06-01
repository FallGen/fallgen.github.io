var i = 0;
let img = [];
let count_slider = 1;

// document.getElementById("test").innerHTML = 

function create_indicator(){
	let test = document.querySelector('.indicator');
	test.innerHTML = '';

	for (let index = 1; index <= img.length; index++) {
		let count = document.createElement("count");
		count.setAttribute(	'class', 'indicator_point');
		count.setAttribute(	'id', 'indicator_point'+ index);

		// count.style.background = "#2368a1";
		count.style.borderRadius  = "10px";
		count.style.height = "10px";
		count.style.width = "10px";
		count.style.margin = "3px";
		test.appendChild(count);
		}
		find_pointer();
}

function find_pointer() {
	for (let index = 1; index <= img.length; index++) {
		if (count_slider == index)
			document.getElementById("indicator_point" + index).style.background = "red";
		else 
			document.getElementById("indicator_point" + index).style.background = "#2368a1";
	}
	
	if (img.length == 1) 
		swape.style.visibility = "Hidden";
	else
		swape.style.visibility = "visible";
}

function fnc_swape_left() {	
	if (count_slider - 1 == 0) count_slider = img.length; else count_slider--;
	
	swape_slider(count_slider);
	find_pointer();
}

function fnc_swape_right() {	
	if (count_slider + 1 > img.length) count_slider = 1; else count_slider++;
	
	swape_slider(count_slider);
	find_pointer();
}

function swape_slider(count_slider) {
	popup_img.style.backgroundImage = img[count_slider-1];
}


function fnc_popUp(event) {
	let ID = event.target.id;
	count_slider = 1;
	switch (ID) {
		case 'project_1':
		
		img = ["url('image/project1.1.jpg')"];
		
		popup_img.style.backgroundImage = img[i];
		
		create_indicator();

		document.getElementById("popup_title").innerHTML = "Приложения для расчёта термодинамических функций";
		document.getElementById("popup_text").innerHTML = "Приложение для расчета термодинамических функций разных химических соединения с расчётом энергии Гибса, удельной теплоёмкости, энтропии и энтальгии.";
		document.getElementById("popup_dop").innerHTML = "<h2> <a href = \"https://docs.google.com/document/d/1IacQBEXn9GeuX3t5jsfJDyyzk_BK3qy15EuescexWgU/edit\" target=”_blanc”> подробнее </a> </h2> ";
		break;

		case 'project_2':

		img = ["url('image/project2.1.jpg')"];
		popup_img.style.backgroundImage = img[i];
		create_indicator();

		document.getElementById("popup_title").innerHTML = "Приложение для оценки работоспособности метрик ИТ-процессов";
		document.getElementById("popup_text").innerHTML = "Метрика — это качественный или количественный показатель, который отражает ту или иную характеристику и уровень успешности продукта. Приложения предназначено для вычисления эффективности работоспособности метрик ИТ-процессов, посредством их приоритизации по отношению к друг другу. Так же приложение способно определить самый эффективный вариант развития метрик для увеличения качественного и количественного показателя эффективности.";
		document.getElementById("popup_dop").innerHTML = "<h2> <a href = \"https://docs.google.com/document/d/1ULO7tbPSoe-XJZXih2fXFb6iCjEQaheUhP1BlhHYjZc/edit\" target=”_blanc”> подробнее </a> </h2> ";
		break;

		case 'project_3':
		img = ["url('image/project3.1.jpg')", "url('image/project3.2.jpg')"];
		popup_img.style.backgroundImage = img[i];
		create_indicator();
		
	
		document.getElementById("popup_title").innerHTML = "Приложение для решения инженерных задач";
		document.getElementById("popup_text").innerHTML = "Приложение разработанное для решения инженерный задач. Функционал приложения заключается в следующих возможностях: решение системы линейных алгебраических уравнений при помощи разных методов; решение нелинейных уравнений при помощи разных методов; решение систем нелинейных уравнений при помощи разных методов; решение задачи интерполяции методом Лангранджа; решение численного интегрирования при помощи разных методов; решение численного дифференцирования при помощи разных методов; решение задачи Коши ОДУ 1-го порядка при помощи разных методов; решение ОДУ высших порядков и систем ОДУ.";
		document.getElementById("popup_dop").innerHTML = "<h2> <a href = \"https://docs.google.com/document/d/1NcuKsxGoFsyErEhMthkdvoovrJBlQbf27cJOnicsDw0/edit\" target=”_blanc”> подробнее </a> </h2> ";
		break;

		case 'project_4':
		img = ["url('image/project4.1.jpg')", "url('image/project4.2.jpg')"];
		popup_img.style.backgroundImage = img[i];
		create_indicator();
		
		document.getElementById("popup_title").innerHTML = "Личный website разработанный с помощью HTML, CSS, JS";
		document.getElementById("popup_text").innerHTML = "";
		document.getElementById("popup_dop").innerHTML = "<h2> <a href = \"https://fallgen.github.io/\" target=”_blanc”> подробнее </a> </h2> ";
		break;

		case 'project_5':
		img = ["url('image/project5.1.jpg')"];
		popup_img.style.backgroundImage = img[i];
		create_indicator();
		
		document.getElementById("popup_title").innerHTML = "Проектирование и разработка реляционной базы данных";
		document.getElementById("popup_text").innerHTML = "Проектирование и разработка базы данных (БД) при помощи реляционной СУБД MS Access и ЯП Java на IDE Netbeans. Приложение представляет собой базу данных института, позволяющее добавлять, удалять и изменять данные студентов, предметов, групп и сессии, а так же искать необходимую информацию посредством встроенного в приложение поиска";
		document.getElementById("popup_dop").innerHTML = "<h2> <a href = \"https://docs.google.com/document/d/1ZWJy_su8612cjUtG2PLDKVkCJeZyGTmjw-I8AcJOQJQ/edit?usp=sharing\" target=”_blanc”> подробнее 1 </a> </h2> <h2> <a href = \"https://docs.google.com/document/d/143iVcycZmHoMKovQ4ByhfXJF5_7LbyuHVw1s1Lh0aRM/edit?usp=sharing\" target=”_blanc”> подробнее 2 </a> </h2>";
		break;
		
		case 'project_6':
		img = ["url('image/project6.1.jpg')", "url('image/project6.2.jpg')", "url('image/project6.3.jpg')"];
		popup_img.style.backgroundImage = img[i];
		create_indicator();
		
		document.getElementById("popup_title").innerHTML = "Разработка приложения модели эволюционного моделирования";
		document.getElementById("popup_text").innerHTML = "Реализация модели эволюционного моделирования посредством воссоздания потомства с мутациями и его скрещивание с себе подобными при помощи кроссинговера";
		document.getElementById("popup_dop").innerHTML = "<h2> <a href = \"https://docs.google.com/document/d/1BKxS41j-87iZVslRAGXv-zkGFqmUxm9P/edit?usp=sharing&ouid=110215117524398136659&rtpof=true&sd=true\" target=”_blanc”> подробнее</a> </h2>";
		break;
		
		case 'project_7':
		img = ["url('image/project7.1.jpg')", "url('image/project7.2.jpg')", "url('image/project7.3.jpg')"];
		popup_img.style.backgroundImage = img[i];
		create_indicator();
		
		document.getElementById("popup_title").innerHTML = "Разработка приложения модели PID-Регулятора";
		document.getElementById("popup_text").innerHTML = "Приложение с представлением модели поведения ПИД-регулятора (пропорционально-интегрально-дифференцирующий регулятор).";
		document.getElementById("popup_dop").innerHTML = "<h2> <a href = \"https://docs.google.com/document/d/1tjPBttl4chkWleYEsl6von6m3ZBqEiBsY-PmRW3VtTY/edit?usp=sharing\" target=”_blanc”> подробнее</a> </h2>";
		break;
	}
}

function AutoSlide() {
	if (i == img.length) {
		i = 0;
	}

	popup_img.style.backgroundImage = img[i];

	// alert ('функция сработала ' + m + ' раз');
	// m++;
	i++;
	setTimeout(AutoSlide, 1000);
}



let timerId
document.addEventListener('submit', (e)=>{
	e.preventDefault()
	let popup = document.querySelector('.pop_up')
	let form = document.querySelector('.container.mail')
	clearTimeout(timerId)
	
		// clearTimeout(timerId)
		popup.classList.remove('closed')
		popup.querySelector('p').innerHTML = "Данные были отправлены"
		form.classList.add('closed')
		

		timerId = setTimeout(()=>{
			popup.classList.add('closed')
		}, 5000)

	
		document.querySelector('.main').classList.remove('hidden');
		document.querySelector('.footer').classList.remove('hidden');

		let inputs = document.forms[0];
  		let fullName = "ФИ: " + inputs[0].value + " "+ inputs[1].value;

		let birthday = "Дата рождения: " + inputs[2].value + '.' + inputs[3].value + '.' + inputs[4].value;
		let faculty = "Факультет: " + document.forms[0][6][document.forms[0][6].value].innerHTML + " " + inputs[5].value + '-' + inputs[7].value;
		let gender =  inputs[8].checked ? 'Пол: муж' : 'Пол: жен';
		let mail = "Email: " + inputs[10].value + inputs[11].value;

		let options = [fullName,birthday, gender, faculty, mail];


		writeData(options);
})



function writeData(options){
 
	options.forEach((item)=>{

		let listItem = document.createElement('li');
		listItem.className = "footerItem";
		document.querySelector('.footer').firstElementChild.append(listItem);
		listItem.innerHTML = item;
	})

}



let photo1 = document.querySelectorAll(".gallery_photo")[0];
let photo2 = document.querySelectorAll(".gallery_photo")[1];
let photo3 = document.querySelectorAll(".gallery_photo")[2];

photo1.parentElement.addEventListener('mouseover', (e)=>{
	photo1.style.display = 'none';
	document.querySelector('.description').style.display = 'block';
 })

 photo1.parentElement.addEventListener('mouseout', (e)=>{
	 photo1.style.display = 'block';
	 document.querySelector('.description').style.display = 'none';
  
  })
 
  photo2.addEventListener('click', (e)=>{
	 photo2.classList.toggle('border');
 
  
  })

 
  photo3.parentElement.addEventListener('mouseover', (e)=>{
	photo3.classList.toggle('hidden')
	photo3.nextElementSibling.classList.toggle('hidden')
 })

 photo3.parentElement.addEventListener('mouseout', (e)=>{
	photo3.classList.toggle('hidden')
	photo3.nextElementSibling.classList.toggle('hidden')
  })

  

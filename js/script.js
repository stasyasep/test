form1.addEventListener('submit', validation,'submit');
function validation(event){
	event.preventDefault();
	let emptyFieldsName = [];
	let completedFieldsName = [];
	let inputs = document.querySelectorAll('input');
	Array.prototype.forEach.call(inputs, function(e){
		if(e.value.length>0&&e.type!=='submit'){
			if(e.classList.contains('empty')){
				e.classList.remove('empty');
			}
			e.classList.add('completed');
			completedFieldsName.push(e.name);
		}
		if(e.value.length===0&&e.type!=='submit'){
			if(e.classList.contains('completed')){
				e.classList.remove('completed');
			}
			e.classList.add('empty');
			emptyFieldsName.push(e.name);
		}
	});

	while(document.querySelectorAll('.fieldsName').length<2){
		createDiv();
	}
	let fieldsNameDiv = document.querySelectorAll('.fieldsName');
	fieldsNameDiv[0].innerText='Empty fields :\n'+emptyFieldsName.join(', ');
	fieldsNameDiv[1].innerText='Completed fields :\n'+completedFieldsName.join(', ');
	
	function createDiv(){
		let div = document.createElement('div');
		form1.querySelector('.filds_conteiner').insertBefore(div, document.querySelector('.conteiner_submit'));
		div.classList.add('fieldsName');
	}
}
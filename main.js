const colorPicker = document.getElementById('color-picker');
colorPicker.value = '#33e1ed';
colorPicker.addEventListener('input', () =>{
	const colorSelected = colorPicker.value;
	document.body.style.background = colorSelected;
})
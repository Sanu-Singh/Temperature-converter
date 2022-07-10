const calculatetemp = () =>{
	const numbertemp=document.getElementById('num').value;
	const tempselected=document.getElementById('sel');
	const valuetemp=sel.options[tempselected.selectedIndex].value;

const celtoFah =(cel)=> {
	let fahrenheit=Math.round((cel*9/5)+32);
	return fahrenheit;
}

	const fahtoCel = (fah) =>{
     let celcius=Math.round((fah-32)*5/9);
     return celcius;
	}


let result;

if(valuetemp=='cel'){
	result=celtoFah(numbertemp);
	document.getElementById('resultcontain').innerHTML= `=${result} °Fahrenheit`;

}else{
	result=fahtoCel(numbertemp);
	document.getElementById('resultcontain').innerHTML= `=${result} °Celsius`;
}
}





function retornarHora()
{
	//SE OBTINE LA HORA
fecha = new Date()
hora = fecha.getHours()
//VERIFICACION AM /PM
if (hora>12) {
meri=' pm';
hora=hora-12; }
else
meri=' am';
minuto = fecha.getMinutes()
//ADICION DE "0" SI EL MINUTO O SEGUNDO ES MENOR A 10
if (minuto<10) minuto='0'+minuto;
segundo = fecha.getSeconds()
if (segundo<10) segundo='0'+segundo;
horita = hora + ":" + minuto + ":" + segundo + meri;
document.getElementById('hora').innerHTML = horita
//ENVIO DE HORA AL HTML
setTimeout('retornarHora()',1)
}




function Llenar(){
	var servicio;
	servicio= document.getElementById('lista').value;
	var selector=getElementById("Elementos");
	if(servicio=!0){
				selector.options[0] = new Option('Notebook');
	}
}

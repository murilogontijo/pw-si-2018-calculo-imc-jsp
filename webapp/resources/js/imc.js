// variavel de escopo global: qualquer codig JS consegue ler/escrever nela
var xyz = 666;

if (window.navigator.userAgent.lastIndexOf('Edge') > 0) {
    alert('Use o Chrome ou Mozzila');
}

function calcularImc() {
    // variaveis de escopo delimitado: so eh possivel ler/escrever de dentro dessa function
    // externamente elas nao sao visiveis
    var idadeElement = document.getElementById('idade');
    var alturaElement = document.getElementById('altura');
    var pesoElement = document.getElementById('peso');
    
    var imcElement = document.getElementById('imcTotal');
    var imcTotal = parseFloat(pesoElement.value) / ( parseFloat(alturaElement.value) * parseFloat(alturaElement.value) );
	
	//imcElement.innerHTML = 'O seu IMC eh ' + imcTotal.toFixed(1) + ' kg/m²';
	
	
	if (imcTotal < 16.00 ){
		imcElement.innerHTML = 'O seu IMC eh ' + imcTotal.toFixed(1) + ' kg/m²' + '<br /> Classificacao: Magreza grave' + '<img class="imagemimc" src="resources/imagens/magrinho_tadinho.jpg">';
	} 
	else if (16.00 <= imcTotal && imcTotal < 17.00 ){
		imcElement.innerHTML = 'O seu IMC eh ' + imcTotal.toFixed(1) + ' kg/m²' + '<br /> Classificacao: Magreza moderada' + '<img class="imagemimc" src="resources/imagens/magrinho_pegada.jpg">';
	} 
	else if (17.00 <= imcTotal && imcTotal < 18.50 ){
		imcElement.innerHTML = 'O seu IMC eh ' + imcTotal.toFixed(1) + ' kg/m²' + '<br /> Classificacao: Magreza leve' + '<img class="imagemimc" src="resources/imagens/magro_leve.jpg">';
	} 
	else if (18.50 <= imcTotal && imcTotal < 25.00 ){
		imcElement.innerHTML = 'O seu IMC eh ' + imcTotal.toFixed(1) + ' kg/m²' + '<br /> Classificacao: Saudavel' + '<img class="imagemimc" src="resources/imagens/oloco_meu_parabens.jpg">';
	} 
	else if (25.00 <= imcTotal && imcTotal < 30.00 ){
		imcElement.innerHTML = 'O seu IMC eh ' + imcTotal.toFixed(1) + ' kg/m²' + '<br /> Classificacao: Sobrepeso' + '<img class="imagemimc" src="resources/imagens/sobrepeso_herbalife.jpg">';
	} 
	else if (30.00 <= imcTotal && imcTotal < 35.00 ){
		imcElement.innerHTML = 'O seu IMC eh ' + imcTotal.toFixed(1) + ' kg/m²' + '<br /> Classificacao: Obesidade Grau I' + '<img class="imagemimc" src="resources/imagens/obesidade_1.jpg">';
	} 
	else if (35.00 <= imcTotal && imcTotal < 40.00 ){
		imcElement.innerHTML = 'O seu IMC eh ' + imcTotal.toFixed(1) + ' kg/m²' + '<br /> Classificacao: Obesidade Grau II (Severa)' + '<img class="imagemimc" src="resources/imagens/obesidade_2.jpg">';
	} 
	else {
		imcElement.innerHTML = 'O seu IMC eh ' + imcTotal.toFixed(1) + ' kg/m²' + '<br /> Classificacao: Obesidade Grau III (Morbida)' + '<img class="imagemimc" src="resources/imagens/ce_vai_morrer.JPG">';
	}

    
}
//Faça um algoritmo que calcule e apresente o valor do volume de uma lata de óleo, dado seu raio e sua altura

class LataDeOleo { 

    constructor(raio, altura) { 
  
      this.raio = raio; 
  
      this.altura = altura; 
  
    } 
  
   
  
    calcularVolume() { 
  
      const volume = Math.PI * Math.pow(this.raio, 2) * this.altura; 
  
      console.log('O volume da lata de óleo é:', volume.toFixed(2)); 
  
    } 
  
  } 
  
 
  
  const raio = prompt('Digite o raio da lata de óleo:'); 
  const altura = prompt('Digite a altura da lata de óleo:');  
  
   
  
  const lataDeOleo = new LataDeOleo(parseFloat(raio), parseFloat(altura)); 
  
  lataDeOleo.calcularVolume(); 
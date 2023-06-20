//Faça um algoritmo que transforme uma velocidade fornecida em m/s pelo usuário 
// para Km/h. Para tal, multiplique o valor em m/s por 3,6.
class ConversorVelocidade { 

    constructor(velocidadeMetrosPorSegundo) { 
  
      this.velocidadeMetrosPorSegundo = velocidadeMetrosPorSegundo; 
  
    } 
  
   
  
    converterParaKmPorHora() { 
  
      const velocidadeKmPorHora = this.velocidadeMetrosPorSegundo * 3.6; 
  
      console.log(`${this.velocidadeMetrosPorSegundo} m/s é equivalente a ${velocidadeKmPorHora.toFixed(2)} Km/h`); 
  
    } 
  
  } 
  
  const velocidadeMetrosPorSegundo = prompt('Digite a velocidade em m/s:'); 
  const conversor = new ConversorVelocidade(parseFloat(velocidadeMetrosPorSegundo)); 
  
  conversor.converterParaKmPorHora(); 
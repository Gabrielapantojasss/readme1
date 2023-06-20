// Dado que a fórmula para conversão de Fahrenheit para Celsius é C = 5/9 (F – 32), leu um valor de temperatura em Fahrenheit e exibi-lo em Celsius 
class Temperatura { 

    constructor(fahrenheit) { 
  
      this.fahrenheit = fahrenheit; 
  
    } 
  
    converterParaCelsius() { 
  
      const celsius = (5 / 9) * (this.fahrenheit - 32); 
  
      console.log(`${this.fahrenheit}°F é equivalente a ${celsius.toFixed(2)}°C`); 
  
    } 
  
  } 
  
  
  const fahrenheit = prompt('Digite a temperatura em Fahrenheit:'); // Solicita a temperatura em Fahrenheit ao usuário 
  
  const temperatura = new Temperatura(parseFloat(fahrenheit)); 
  
  temperatura.converterParaCelsius(); 
  
   
// Dado o tamanho do raio de uma circunferência, calcular a área e o perímetro da mesma. 

import { calculateArea, calculatePerimeter } from './circunferenciaUtils.js'; 



class Circunferencia { 

  constructor(raio) { 

    this.raio = raio; 

  } 

  calcularArea() { 

    return calculateArea(this.raio); 

  } 


  calcularPerimetro() { 

    return calculatePerimeter(this.raio); 

  } 

} 


export const calculateArea = (raio) => { 

  return Math.PI * raio ** 2; 

}; 

export const calculatePerimeter = (raio) => { 

  return 2 * Math.PI * raio; 

}; 

const circunferencia = new Circunferencia(5); 

const area = circunferencia.calcularArea(); 

const perimetro = circunferencia.calcularPerimetro(); 

console.log('Área da circunferência:', area); 

console.log('Perímetro da circunferência:', perimetro); 

 
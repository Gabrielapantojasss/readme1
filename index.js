// Dado o tamanho da base e da altura de um retângulo, calcular a sua área e o seu perímetro

import { calculateArea, calculatePerimeter } from './retanguloUtils.js'; 
class Retangulo { 

  constructor(base, altura) { 

    this.base = base; 
    this.altura = altura; 

  } 

  calcularArea() { 

    return calculateArea(this.base, this.altura); 

  } 

  calcularPerimetro() { 

    return calculatePerimeter(this.base, this.altura); 

  } 

} 
export const calculateArea = (base, altura) => { 

  return base * altura; 

}; 
export const calculatePerimeter = (base, altura) => { 

  return 2 * (base + altura); 

}; 
const retangulo = new Retangulo(5, 10); 

const area = retangulo.calcularArea(); 

const perimetro = retangulo.calcularPerimetro(); 

 

console.log('Área do retângulo:', area); 

console.log('Perímetro do retângulo:', perimetro); 

 


 


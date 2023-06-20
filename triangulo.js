// Dado os três lados de um triângulo determinar o perímetro do mesmo.

import { calculatePerimeter } from './trianguloUtils.js'; 

class Triangulo { 

  constructor(lado1, lado2, lado3) { 

    this.lado1 = lado1; 

    this.lado2 = lado2; 

    this.lado3 = lado3; 

  } 

  calcularPerimetro() { 

    return calculatePerimeter(this.lado1, this.lado2, this.lado3); 

  } 

} 

export const calculatePerimeter = (lado1, lado2, lado3) => { 

  return lado1 + lado2 + lado3; 

}; 

const triangulo = new Triangulo(3, 4, 5); 

const perimetro = triangulo.calcularPerimetro(); 

 

console.log('Perímetro do triângulo:', perimetro); 
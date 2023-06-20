//Dado o tamanho do lado de um quadrado, calcular a área e o perímetro do mesmo

import { calculateArea, calculatePerimeter } from './quadradoUtils.js'; 
class Quadrado { 

    constructor(lado) { 
  
      this.lado = lado; 
  
    }   
  
    calcularArea() { 
  
      return calculateArea(this.lado); 
  
    } 
  
    calcularPerimetro() { 
  
      return calculatePerimeter(this.lado); 
  
    } 
  
  } 
  
  export const calculateArea = (lado) => { 
  
    return lado * lado; 
  
  }; 
  
  export const calculatePerimeter = (lado) => { 
  
    return 4 * lado; 
  
  }; 
  
  const quadrado = new Quadrado(5); 
  
  const area = quadrado.calcularArea(); 
  
  const perimetro = quadrado.calcularPerimetro(); 
  
  console.log('Área do quadrado:', area); 
  
  console.log('Perímetro do quadrado:', perimetro); 

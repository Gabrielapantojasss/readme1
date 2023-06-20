// Ler um número inteiro e exibir o seu sucessor e seu antecessor. 

class Numero { 

    constructor(valor) { 
  
      this.valor = valor; 
  
    } 
  
    exibirSucessor() { 
  
      const sucessor = this.valor + 1; 
  
      console.log('O sucessor de', this.valor, 'é', sucessor); 
  
    } 
  
    exibirAntecessor() { 
  
      const antecessor = this.valor - 1; 
  
      console.log('O antecessor de', this.valor, 'é', antecessor); 
  
    } 
  
  } 

  
  const numero = new Numero(5); 
  
  numero.exibirSucessor(); 
  
  numero.exibirAntecessor(); 
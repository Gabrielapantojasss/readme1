//Solicitar a idade de uma pessoa em dias e informar na tela a idade em anos, meses e dias

class Pessoa { 

    constructor(idadeEmDias) { 
  
      this.idadeEmDias = idadeEmDias; 
  
    } 
  
   calcularIdade() { 
  
      const anos = Math.floor(this.idadeEmDias / 365); 
  
      const meses = Math.floor((this.idadeEmDias % 365) / 30); 
  
      const dias = this.idadeEmDias % 30; 
  
   
  
      console.log('Idade: ', anos, 'anos,', meses, 'meses e', dias, 'dias'); 
  
    } 
  
  } 
  
  
  const idadeEmDias = prompt('Digite a idade em dias:'); 
  
  const pessoa = new Pessoa(parseInt(idadeEmDias)); 
  
  pessoa.calcularIdade(); 
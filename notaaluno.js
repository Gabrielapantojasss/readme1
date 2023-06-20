//Faça um algoritmo para calcular a nota semestral de um aluno. A nota semestral é 
//obtida pela média aritmética entre a nota de 2 bimestres. Cada nota de bimestre é composta por 2 notas de provas. 

class Aluno { 

    constructor(notasBimestre1, notasBimestre2) { 
  
      this.notasBimestre1 = notasBimestre1; 
  
      this.notasBimestre2 = notasBimestre2; 
  
    } 
  
    calcularNotaSemestral() { 
  
      const mediaBimestre1 = this.calcularMedia(this.notasBimestre1); 
  
      const mediaBimestre2 = this.calcularMedia(this.notasBimestre2); 
  
      const notaSemestral = (mediaBimestre1 + mediaBimestre2) / 2; 
  
      console.log('A nota semestral do aluno é:', notaSemestral.toFixed(2)); 
  
    } 
  
    calcularMedia(notas) { 
  
      const soma = notas.reduce((total, nota) => total + nota, 0); 
  
      return soma / notas.length; 
  
    } 
  
  } 
  
  
  const notasBimestre1 = [7.5, 8.0]; 
  const notasBimestre2 = [6.5, 7.0];  
  
  const aluno = new Aluno(notasBimestre1, notasBimestre2); 
  
  aluno.calcularNotaSemestral(); 
  
   
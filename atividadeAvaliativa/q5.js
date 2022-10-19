let nome_aluno;
let nota_n1;
let nota_n2_necessaria_aprovado;
let nota_n2_necessaria_prova_final;
let nota_n2_necessaria_reprovado;
let media_parcial;

nome_aluno = prompt("Qual o seu nome? ");
nota_n1 = prompt("Qual sua nota na n1? ");


nota_n2_necessaria_aprovado = (35 - (nota_n1*2))/3;
nota_n2_necessaria_prova_final= (25 - (nota_n1*2))/3;
nota_n2_necessaria_reprovado= (15 - (nota_n1*2))/3;

nota_n2_necessaria_aprovado = nota_n2_necessaria_aprovado.toFixed(2);
nota_n2_necessaria_prova_final = nota_n2_necessaria_prova_final.toFixed(2);
nota_n2_necessaria_reprovado = nota_n2_necessaria_reprovado.toFixed(2);


alert(nome_aluno+", você precisa tirar um "+nota_n2_necessaria_aprovado+
" na N2, para ser aprovado. \nDe um "+nota_n2_necessaria_prova_final+
" para ficar na prova final. \nE de um "+nota_n2_necessaria_reprovado+
" para ficar reprovado.");
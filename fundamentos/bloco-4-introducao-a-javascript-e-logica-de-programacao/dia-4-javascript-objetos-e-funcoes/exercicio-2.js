/*let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
info['recorrente'] = 'Sim';

let infoM = {
        personagem: 'Tio Patinhas',
        origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
        nota: 'O último MacPatinhas',
        recorrente: 'Sim'
}
    for(let valores in info){
        if(valores === "recorrente" && info[valores] === 'Sim' && infoM[valores] === 'Sim'){
            console.log('Ambos recorrentes')
        }else{
            console.log(infoM[valores], 'e', info[valores]);
        }
}; */

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
  //console.log('O livro favorito de ' + leitor.nome + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo)

  leitor.livrosFavoritos.push({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  })
  console.log(leitor)
  console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.')

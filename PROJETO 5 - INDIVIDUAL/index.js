import inquirer from 'inquirer';

async function perguntas() {
    let saida = false;
    let listaPropriedades = [];
    while (saida === false) {
        let answers = await inquirer.prompt([
            {
                "name": "propriedadeCss",
                "type": "input",
                "message": 'Digite uma propriedade CSS'
            }
        ]);
        if (answers.propriedadeCss == 'sair' || answers.propriedadeCss == 'SAIR') {
            saida = true
            listaPropriedades.sort();
            console.log(listaPropriedades);
        } else {
            listaPropriedades.push(answers.propriedadeCss)
        }

    }
}
perguntas()

///PROJETO FEITO EM PARCERIA COM OUTROS ALUNOS DA TURMA
///RESULTADO APROXIMADO
///ORGANIZAÇÃO DA NÃO-REPETIÇÃO DAS PROPRIEDADES NÃO FUNCIONOU
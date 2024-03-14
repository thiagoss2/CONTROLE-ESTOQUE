class Pessoa {

    constructor() {
        this.nome = '';
        this.idade = 0;
        this.altura = 0;
        this.sexo = '';
    }

    setNome(nomePessoa) {
        this.nome = nomePessoa;

    }
    setIdade(idade) {
       this.idade = idade;
    }
    setAltura(altura) {
        this.altura = altura;
    }
    setSexo(sexo) {
        this.sexo = sexo;
    }
    get getNome() {
        return this.nome;
    }
    get getIdade() {
        return this.idade;
    }
    get getAltura() {
        return this.altura
    }
    get getSexo() {
        return this.sexo;
    }

}


const pessoa = new Pessoa();
teste.setNome('joao');

let nome = teste.getNome;
console.log(nome)

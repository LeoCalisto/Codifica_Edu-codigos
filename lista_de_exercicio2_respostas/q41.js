//41. Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui nome e idade.
const pessoa = {
    nome:"Leonardo",
    idade: 26
}

console.log(pessoa.nome+" tem "+pessoa.idade+" anos")

pessoa.email = "Teste123@gmail.com";

console.log(pessoa);
const form = document.getElementById('form-agendamento');
const numero = [];
const contato = [];
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adiocionarLinha();
    atualizeTabela();
});

function adiocionarLinha() {
    const inputNomeContato = document.getElementById('Nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if (contato.includes(inputNomeContato.value)) {
        alert(`O: ${inputNomeContato.value} ja foi inserido`);
    } else {
    contato.push(inputNomeContato.value);
    numero.push(parseFloat(inputNumeroContato.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`
    linha += `<td>${inputNumeroContato.value}</td>`
    linha += '</td>';

    linhas += linha;
    }

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomeContato.value = '';
    inputNumeroContato.value = '';

}

function atualizeTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
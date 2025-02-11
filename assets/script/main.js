function insert(num) {
    let numero = document.getElementById('num1');
    numero.value = numero.value + num;
}
function clean() {
  numero = document.getElementById('num1').value = "";

}
function resultado() { 
    let resultado = document.getElementById('num1');

    if (resultado) {
        resultado.value = eval(resultado.value);
    }
}
function tela_Inicial_Link() {
    let direcionamento = window.location.href = 'assets/tela-inicial.html';

    console.log(direcionamento);
}
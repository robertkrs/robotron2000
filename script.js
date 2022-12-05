/*button = document.getElementById('calcular');

button.addEventListener('click', () => {
    console.log('clicouuu');
})*/

const tintas = document.getElementById('tintas');

tintas.addEventListener('click', () => {
    mostraTinta();
});


function mostraTinta(){
    let ativo = document.querySelector('.ativo');
    let lista = document.querySelector('.lista');

    console.log(ativo);
    if(ativo === null){
        lista.classList.add('ativo');

    }else{
        lista.classList.remove('ativo');
    console.log(ativo);

    }
}

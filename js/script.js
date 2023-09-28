let BuscarBox = document.querySelector('.buscar-box')
let lupa = document.querySelector('.lupa-buscar')
let btnFechar = document.querySelector('.btn-fechar')

lupa.addEventListener('click',()=>{
    BuscarBox.classList.add('ativar')

})

btnFechar.addEventListener('click',()=>{
    BuscarBox.classList.remove('ativar')

})
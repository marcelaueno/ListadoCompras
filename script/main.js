var popUpCarga = new bootstrap.Modal(document.getElementById('popUpCarga'), {})
let inicio = document.getElementById('inicio')
let listado = document.getElementById('listado')
let listadoLista = document.getElementById('listadoLista')
let detalle = document.getElementById('detalle')
let listadoStorage = []

let guardar = document.getElementById('popUpCarga__add').addEventListener('click',function () {
    let producto = document.getElementById('popUpCargaProducto').value
    let icono = document.getElementById('popUpCargaIcono').value
    let info = document.getElementById('popUpCargaInfo').value
    //vaciar los value
    document.getElementById('popUpCargaProducto').value = ""
    document.getElementById('popUpCargaIcono').value = ""
    document.getElementById('popUpCargaInfo').value = ""
    let modelo = `<li class="list-group-item" data-icono="${icono}" data-producto="${producto}" data-info="${info}"><img src="${icono}" alt="${producto}" class="listado__icono"/>${producto}</li>`
    console.log('a ver', producto, icono, info, listadoLista)
    listadoLista.innerHTML += modelo
    popUpCarga.hide()
    inicio.style.display = 'none'
    listado.style.display = 'block'
    listadoStorage.push(modelo)
    localStorage.setItem('listadoCompras', listadoStorage)
})
//agregar hijos - data: el icono de imagen no lleva innerHTML se reemplaza por src pero en la etuiqueta del html el id va justo antes qeu el src
let listadoListaHijo = document.getElementById('listadoLista').addEventListener('click', function(e){
    document.getElementById('detalleIcono').src = e.target.getAttribute('data-icono')
    document.getElementById('detalleProducto').innerHTML = e.target.getAttribute('data-producto')
    document.getElementById('detalleInfo').innerHTML = e.target.getAttribute('data-info')
    listado.style.display = 'none'
    detalle.style.display = 'block'
})

let detalleCerrar = document.getElementById('detalleCerrar').addEventListener('click',function(){
    listado.style.display = 'block'
    detalle.style.display = 'none'
})

let desdeStorage = localStorage.getItem("listadoCompras")
if(desdeStorage){
    inicio.style.display = 'none'
    listado.style.display = 'block'
    listadoLista.innerHTML +=desdeStorage
}
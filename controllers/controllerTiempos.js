import { tiempos } from "../models/modelTiempos.js" // agregar siempre .js
export function registrarTiempos() {
    // capturar informacionn
    let fecha = document.getElementById('fecha').value
    let tiempo = document.getElementById('tiempo').value
    let proyecto = document.getElementById('proyecto').value

    let newRegistro = {
        fecha: fecha,
        tiempo: tiempo,
        proyecto: proyecto
    }

    //metodos de arreglos
    //metodo push() agrega algun elemento del arreglo en la ultima posicion
    tiempos.push(newRegistro)
    console.log(tiempos)
    crearRegistroTiempo(newRegistro)
}

function crearRegistroTiempo(newRegistro) {
    let registro = document.createElement('tr')
    let fecha = document.createElement('td')
    let tiempo = document.createElement('td')
    let proyecto = document.createElement('td')
    let acciones = document.createElement('td')
    let editar = document.createElement('button')
    let eliminar = document.createElement('button')
    fecha.textContent = newRegistro.fecha
    tiempo.textContent = newRegistro.tiempo
    proyecto.textContent = newRegistro.proyecto
    editar.textContent = 'editar'
    eliminar.textContent = 'eliminar'
    acciones.classList.add('botones')

    acciones.append(editar, eliminar)
    registro.append(fecha, tiempo, proyecto, acciones)
    console.log(registro)
    document.getElementById('registros').append(registro)
}

function agregarRegistroTiempo() {
    

}
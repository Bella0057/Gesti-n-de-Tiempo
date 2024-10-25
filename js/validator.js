import { registrarTiempos } from "../controllers/controllersTiempos.js"; // siempre agregar .js cuando exporamos y importamos
import { listarProyectos, filtrarPorEmpresa, listarPorProyecto, filtrarPorTipoProyecto } from "../controllers/controllersProllecto.js"

let btnRegistro = document.getElementById("btnRegistrar")
if(btnRegistro){
    btnRegistro.addEventListener('click', registrarTiempos)
}

let listaProyectos = document.getElementById('listarProyectos')
if(listaProyectos){
    listaProyectos.addEventListener('click', listarProyectos)
}
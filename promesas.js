// Función que retorna los datos de provincias
/*function obtenerPcias() {
    await retrasar(1800);

    const consulta = fetch('');
}*/

const retrasar = (milisegundos) => {
    new Promise(resolve => {
        setTimeout(resolve, milisegundos)
    })

}

const  obtenerPcias = async ()=>{ 
    await retrasar(1800)

        const consulta = await fetch('https://apis.datos.gob.ar/georef/api/provincias')
        const objeto= await consulta.json()
     
return objeto
    
}
obtenerPcias()
.then(resultado=>console.log(resultado))


// Función que retorna los datos de departamentos
const retrasar1 = (milisegundos) => {
    new Promise(resolve => {
        setTimeout(resolve, milisegundos)
    })

}
/*function obtenerDptos() {
    await retrasar1(1391);

    const consulta1 = fetch('');
}
*/

const obtenerDptos = async () => {
await retrasar1 (1391)
const consulta1 = await fetch(`https://apis.datos.gob.ar/georef/api/departamentos?campos=completo&max=1000`)
const departamentos= await consulta1.json()

return departamentos 
}
obtenerDptos()
.then(respuesta=>console.log(respuesta))


// Función que retorna los datos de localidades
/*function obtenerLocalidades() {
    await retrasar(900);

    const consulta = fetch('');
}*/

const retrasar2 = (milisegundos) => {
    new Promise(resolve => {
        setTimeout(resolve, milisegundos)
    })

}


const obtenerLocalidades = async () => {
    await retrasar2 (900);
    const consulta2 = await fetch(`https://apis.datos.gob.ar/georef/api/localidades?campos=completo&max=5000`)
    const localidades1 = await consulta2.json()

    return localidades1
    
    }
    obtenerLocalidades()
    .then(respuesta1=>console.log(respuesta1))
    
    // Funcion para obtener todos los datos
    /*function consultarDatos() {
        const provincias = obtenerPcias();
        const dptos = obtenerDptos();
        const localidades = obtenerLocalidades();
    
        console.log(provincias);
        console.log(dptos);
        console.log(localidades);
    }
    */
    

    const consultarDatos = () => {
        const provincias = obtenerPcias();
        const dptos = obtenerDptos();
        const localidades1 = obtenerLocalidades();
    
        console.log(provincias);
        console.log(dptos);
        console.log(localidades1);

    }
    consultarDatos();
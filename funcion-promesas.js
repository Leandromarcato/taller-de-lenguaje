// Transformar todas las funciones declarativas en funciones flecha

// Promesa almacenada en una constante


/* const promesa = new Promise((resolve, reject)=>{

    ( 10 === 10) ? resolve('Los valores son iguales') : reject('Los valores son distintos')
    
})

.then((resultado)=> console.log(resultado))
//.then((resultadoDos)=>console.log(resultadoDos))
.catch(error => console.error(error)) */

// Promesa dentro en una función.
function promesaDos(provincia){

    const promesa = new Promise( (resolve, reject)=> {
    
            ('Formosa' === provincia)
                ?resolve('Usted está ubicado en Formosa')
            
                :reject('Error al realizar la consulta')
            

    });

    return promesa

}
///

//Promesa dentro en una función.
/*const promesaDosA = (provincia) => {

    const promesa = new Promise( (resolve, reject)=> {
    
        ('Formosa' === provincia)
            ?resolve('Usted está ubicado en Formosa')
        
            :reject('Error al realizar la consulta')
        

    });

    return promesa

}

const resultado = promesaDosA('formosa')

resultado
.then(data=>console.log(data))
.catch(error=>console.log(error))
*/


/*function promesaTres(valorBooleano){

    new Promise( ()=> {
        ( true === valorBooleano )//
        ? resolve('Los valores son iguales')//operador ternario (evalua como V) ? (imprime algo ) : (hace otra cosa)
        : reject('Los valores son distintos')
    })
    
}

promesaTres()*/


/*const promesaTres = (valorBooleano)=>{

    return new Promise( (resolve, reject)=> {
        ( true === valorBooleano )//
        ? resolve('Los valores son iguales')//operador ternario (evalua como V) ? (imprime algo ) : (hace otra cosa)
        : reject('Los valores son distintos')
    })
    //return promesaTres

}
  
promesaTres(false)
.then(verdadero=> console.log(verdadero))
.catch(falso =>console.log(falso))*/

/*function promesaCuatro(){

        new Promise( ()=> {
            ( true === arguments )
            ? resolve('Los valores son iguales')
            : reject('Los valores son distintos')
        })
        
}

    promesaCuatro()*/

const promesaCuatro1 = async ( arguments )=>{
    return (true === arguments )
    ? ('Los valores son iguales')
    : ('Los valores son distintos')

}    

promesaCuatro1(true)
    .then(respuesta=>console.log(respuesta))
    .catch(error=>console.log(error))
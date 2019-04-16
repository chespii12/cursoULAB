let datos = [
    {nombre: "Diego", telefono: "966112233", edad: 40},
    {nombre: "Carmen", telefono: "911223344", edad: 35},
    {nombre: "Victor", telefono: "611998877", edad: 15},
    {nombre: "Carolina", telefono: "633663366", edad: 17}
];

let nuevaPersona = persona => {
    return new Promise ((resolve, reject)=>{
        let resultado = datos.filter(personita =>  personita.telefono  === persona.telefono);
        if(resultado.length == 0){            
            
            resolve(persona);
        }else{
           reject("Este teléfono ya existe"); 
        }
            
    })
}

let eliminarPersona = telefono => {
    return new Promise ((resolve, reject)=>{
        let resultado = datos.filter(personita =>  personita.telefono  === telefono);
        if(resultado.length != 0){            
            datos = datos.filter(personita =>  personita.telefono  != telefono);
            resolve(resultado[0]);
        }else{
           reject("Este teléfono no existe"); 
        }
            
    })
}


// nuevaPersona({nombre: "Andrea", telefono:"699222516", edad: 24}).then(resultado => {
//     console.log(datos);      
    
//     console.log("Insertado correctamente");
// }).catch(error => {
//      console.log("Error: " + error);
//     }  
// );

// eliminarPersona({telefono: "6118877"}).then(resultado => {
//     console.log(datos);       
//     console.log("Eliminado correctamente");
// }).catch(error => {
//      console.log("Error: " + error);
//     }  
// );

//para ejecutar variais a la vez. Creo un array de promises. Lo unico malo de esto es que si no funciona una, fallaran todas
// y el resultado

let promises= [nuevaPersona({nombre: "Andrea", telefono:"699222516", edad: 24}),
            eliminarPersona({telefono: "6118877"})
]
Promise.all(promises).then(resultado => {
    console.log(datos);       
}).catch(error => {
        console.log("Error: " + error);
    }  
);
    

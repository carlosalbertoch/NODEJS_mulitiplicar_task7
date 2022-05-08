const colors = require("colors");
const fs =require('fs');
const crearArchivo=async(base=5,listar=false,hasta=3)=>{
    try{
        
        
        let salida='';
        for (let n=1; n<=hasta ;n++){
        salida +=(`${base} x ${n} = ${base*n}\n`)
        };
        if (listar){
            console.log("=========================".blue)
            console.log(`====Tabla del ${base}=======`.blue)
            console.log("=========================".blue)
            console.log(salida)}
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida)
        
        return (`tabla-${base} .txt fue escrita correctamente`)
    }catch(err){
        throw err;

    }   
        
}
    module.exports={
        crearArchivo
    }
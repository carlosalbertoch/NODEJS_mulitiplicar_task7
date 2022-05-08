const argv= require("yargs")
    .option("b",{
        alias:"base",
        type:"number",
        demandOption:true,
        describe: "base de la tabla de multiplicar"
    })
    .option("l",{
        alias:"listar",
        type:"boolean",
        demandOption:true,
        default:false,
        describe:"muestra la tabla en consola"
        })  
    .option("h",{
        alias:"hasta",
        type:"number",
        demandOption:true,
        default:5,
        describe:"num hasta el cual debe multiplicar"
        })     
.check((argv,options)=>{
    if(isNaN(argv.base)){
        throw "la base debe ser un numero"
    }
    return true;
})  
.argv; 

module.exports = argv;
let result = 0;
for(let i = 2; i < process.argv.length; i++)
{
    result += Number(process.argv[i]);
}
console.log(result);

//Ponemos el i en 2 porque asi nos saltamos unos NAN, el process.argv sirve para coger lo indicado en la ejecucion, node nombre 1 2 3, esto recoge el 1 2 3

let renta = parseInt(prompt("Cuanto dinero ganas?"));

/*let renta = 10000;*/

if (renta < 10000){
    console.log('Tu renta es de 5%')
} else if (renta >= 10000 && renta < 20000){
    console.log('Tu renta es de 15%')
} else if (renta >= 20000 && renta < 35000){
    console.log('Tu renta es de 20%')
} else if (renta >= 35000 && renta < 60000){
  console.log('Tu renta es de 30%')
} else (renta >= 60000){
    console.log('Tu renta es de 45%')
}

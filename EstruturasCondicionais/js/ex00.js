var nm , idade
nm=prompt("Digite seu nome:")
idade=parseInt(prompt("Informe sua idade:"))
if(idade>=18){
    alert(nm+" você pode tentar tirar CNH.")
}
else{
    alert(nm+" você não tem idade suficiente.")
}
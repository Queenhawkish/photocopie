let nb = document.getElementById("nb")

let photocop = document.getElementById("photocop")

let price = document.getElementById("price")

nb.addEventListener("input" , function(){
    photocop.innerText = nb.value

    let prix = nb.valueAsNumber

    let final = document.getElementById("final")

    console.log(prix)
    if(photocop.innerText <=10){
        price.innerText = "0.1x" + prix + "€"
        final.innerText = " donc " + 0.1*prix + "€"

    } if (photocop.innerText >=11 && photocop.innerText <=20){
        price.innerText = "10x0.1"+ "€" + " + " +(prix-10) + "x0.09" + "€"
        final.innerText = " donc " + (10*0.1+(prix-10)*0.09) + " €"
    } 
})
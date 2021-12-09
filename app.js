let maFonction = (...param) => document.getElementById("exo1").innerHTML = "Bonjour" + param;

maFonction("Yo ", "Enchanté ", "Encantado ");
maFonction("Yo ", "Enchanté", "Encantado ", "Yo ", "Enchanté ", "Encantado ");

let maFonction2 = (...numbers) => {
    let somme = 0;
    for (let number of numbers) {
        if (Number.isInteger(number)) {
            somme += number;
            document.getElementById("exo2").innerHTML = somme.toString() + "<br>";
        }

    }
}


maFonction2("Bonsoer", 44, 22, 23, 44, 1, 2, 3, 4);
maFonction2("B'jour", 33, 17, 20, 22,24, 26, 28, 4);

let maFonction3 = (...numbers) => {
    let somme = 0;
    for (let number of numbers) {
        if (Number.isInteger(number)) {
            somme += number * 11.76;
            document.getElementById("exo3").innerHTML = somme.toString() + "<br>";
        }

    }
}

maFonction3(1);
maFonction3(4);
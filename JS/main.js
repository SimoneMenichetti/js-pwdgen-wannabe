// Chiedi all’utente il suo nome,
    let userName = prompt("inserire nome utente");

//  poi chiedi il suo cognome,

    let surName = prompt("inserire cognome utente");


//   poi chiedi il suo colore preferito

    let favoriteColor = prompt("inserire colore preferito utente");

//   concatenamento stringa combinata

    let risultato = userName + surName + favoriteColor + "23";

//  output console risultato concatenamento
    console.log("i dati anagrafici utente più colore preferito ed in numero equivale a: ", risultato);


// Infine scrivi sulla pagina nomecognomecolorepreferito23

document.getElementById("pass_user").innerHTML = "i dati anagrafici utente più colore preferito ed il numero equivale a: " + risultato;


alert('Tira il dado')

let utente = Math.floor(Math.random() * 6 + 1);

let computer = Math.floor(Math.random() * 6 + 1);

if (utente > computer){
    alert(`NUMERO UTENTE= "${utente}" > NUMERO COMPUTER= "${computer}" = HAI VINTO!`);
}

else if (utente < computer){
    alert(`NUMERO UTENTE= "${utente}" < NUMERO COMPUTER= "${computer}" = HAI PERSO!`);
}

else  {
    alert(`NUMERO UTENTE= "${utente}" = NUMERO COMPUTER= "${computer}" = PAREGGIO!`);
}
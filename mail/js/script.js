let mail = ['simone@gmail.com', 'gianni@gmail.com', 'filippo@gmail.com', 'dario@gmail.com', 'daniele@gmail.com', 'chiara@gmail.com', 'marta@gmail.com', 'marco@gmail.com', 'giovanni@gmail.com', 'davide@gmail.com'];

let utente = prompt('Inserisci la tua mail');
let flag = false;

for(let i=0; i<mail.length; i++){
    if(mail[i].toLowerCase() === utente.toLowerCase()){
        flag = true;
    }
}

if(flag === true){
    alert('Elemento trovato');
}
else{
    alert('Elemento non trovato');
}

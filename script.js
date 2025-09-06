
console.log("Il torneo Boolkaichi è alle porte e in tanti sono giunti per mettersi alla prova in questo speciale evento. ci sono 12 posti disponibili")
console.log("I combattenti che sono riusciti a registrarsi sono stati valutati e accanto al loro nome è stato segnato anche il loro livello di potenza. ")
console.log("Il torneo si svolgerà in 5 fasi:")
console.log("1 Iscrizioni e scelta dell'arma")
console.log("2 Allenamento")
console.log("3 Qualificazione")
console.log("4 Combattimento")
console.log("5 Premiazione")




const armiTemplate = ["tirapugni", "pugnale", "spada", "nunchaku", "katana", "ascia", "martello", "mazza chiodata", "lancia", "alabarda", "talismano", "scettro magico"]

const combattentiTemplate = []

armiTemplate.forEach(arma => combattentiTemplate.push({ nome: "" }))

let postiLiberi = armiTemplate.length
const combattenti = [...combattentiTemplate]
const sceltaArma = [...armiTemplate]
console.log("ISCRIZIONI E SCELTA DELL'ARMA")
console.log(`Ci sono ${postiLiberi} posti liberi`)

combattenti.map((combattente, index) => {

    let nomeValido = false
    while (nomeValido === false) {

        console.log(`Combattente ${index + 1}:`, combattente)
        console.log("Inserisci il tuo nome")
        const nome = prompt("Inserisci il tuo nome");

        if (nome === "" || nome === null || nome === undefined || combattenti.some(combattente => combattente.nome === nome)) {

            console.log("Nome non valido o già scelto, riprova.")

        } else {

            const n = Math.floor(Math.random() * 70) + 30
            combattente.nome = nome
            nomeValido = true
            console.log("Benvenuto", combattente.nome)
            console.log("Ora ti verra assegnato un livello casuale di potenza tra 30 e 70")
            combattente.potenza = n
            console.log(`il tuo livello di potenza è ${n}`)

        }

    }

    let armaValida = false
    while (armaValida === false) {

        console.log(combattente)
        console.log(`${combattente.nome} scegli la tua arma`)
        console.log("Armi disponibili:", sceltaArma)

        const arma = prompt(`${combattente.nome} scegli la tua arma`)

        if (sceltaArma.includes(arma)) {

            combattente.arma = arma
            armaValida = true
            console.log(combattente.nome + " sceglie " + combattente.arma)
            const indexArma = sceltaArma.indexOf(arma)
            sceltaArma.splice(indexArma, 1)
            console.log(`Combattente ${index + 1}:`, combattente)

        } else {

            console.log("Arma non valida o già scelta, riprova.")

        }
    }

    postiLiberi--

    console.log(`Ci sono ${postiLiberi} posti liberi`)
    return combattente

})

console.log("Lista partecipanti:", combattenti)
console.log("E' ORA DI ALLENARSI")
console.log("L'esito dell'allenamento detterminerà chi dei partecipanti sarà idoneo a qualificarsi al torneo")
console.log("I partecipenti per qualificarsi devono raggiungere un livello di potenza pari o superiore a 2000")

combattenti.forEach((combattente) => {

    const incrementoPotenza = Math.floor(Math.random() * 100) + 1;

    combattente.potenza = combattente.potenza * incrementoPotenza


})

console.log("ESITO ALLENAMENTO")

console.log("ogni partecipante ha aumentato la sua potenza e ora verrà annunciato chi di essi è idoneo")

combattenti.forEach(combattente => console.log(`${combattente.nome}, ${combattente.forza} ${combattente.forza >= 2000 ? "idoneo" : "non idoneo"}`))

console.log("Ora verranno annunciati coloro che si sono qualificati al torneo")

const qualificati = combattenti.filter(combattente => combattente.potenza >= 2000)

console.log("LISTA QUALIFICATI")

qualificati.forEach(qualificato => console.log(qualificato.nome))

if (qualificati.length % 2 !== 0) {

    qualificati.push({ nome: "Combattente Robot", arma: "pugno metallico", potenza: 4000 })

    console.log("Poiche il numero dei qualificati è dispari, ad essi è stato aggiunto un Combettante Robot armato di pistola laser con una potenza pari a 4000, in questo modi l'ultimo combattente della lista non resterà senza avversario")

}

console.log("CHE IL TORNEO ABBIA INIZIO!")

console.log(qualificati)

console.log("Ogni patrecipante combattera in un duello con il patrecipante sucessivo in base all'ordine di qualificazione")

console.log("il duello verra vinto dal combattente con la potenza maggiore (in caso di parità vincera il combattente che gioca in casa, quindi il primo della coppia (quello a sinistra nella descrizione del duello)")

console.log("Chi vincerà il duello sfidera il patrecipante seguente, sempre in base all'ordine di qualificazione")

qualificati.sort((combattenteSX, combattenteDX) => {

    console.log(`${combattenteSX.nome} armato di ${combattenteSX.arma} duellerà contro ${combattenteSX.nome} armato di ${combattenteSX.arma}`)
    console.log("FIGHT!")
    console.log(`${combattenteSX.potenza >= combattenteDX.potenza ? combattenteSX.nome : combattenteDX.nome} vince il duello!`)

    return combattenteSX.potenza - combattenteDX.potenza
})

console.log("IL TORNEO E' GIUNTO AL TERMINE")
console.log("ora verranno annunciati i primi tre clasificati")
console.log("Il vincitore del troneo riceverà in premio lo Scudo d'Oro")
console.log("Il secondo classificato invece lo Scudo d'Argento")
console.log("Infine il terzo lo Scudo di Bronzo")

console.log("PREMIAZIONE")

let annuncioPremiazione = ""
let descrizionePremiazione = ""

for (let i = 0; i <= 2; i++) {

    if (i === 0) {

        annuncioPremiazione = `Il vincitore del torneo è... ${qualificati[0].nome.toUpperCase}! armato di ${qualificati[0].arma} con una potenza pari a ${qualificati[0].potenza}`

        descrizionePremiazione = `*${qualificati[0].nome} sale sul primo posto del podio e riceve lo Scudo d'Oro. ${qualificati[1].nome} alza lo scudo cielo soddisfatto e fiero di essere il vincitore*`

        console.log(annuncioPremiazione)
        console.log(descrizionePremiazione)

    } else if (i === 1) {

        annuncioPremiazione = `Il secondo classificato invece è... ${qualificati[1].nome.toUpperCase} armato di ${qualificati[1].arma} con una potenza pari a ${qualificati[1].potenza}`

        descrizionePremiazione = `*${qualificati[1].nome} sale sul secondo posto del podio e riceve lo Scudo d'Argento. ${qualificati[1].nome} tiene lo scudo in mano e lo guarda contento di essere arrivato quasi in cima*`

        console.log(annuncioPremiazione)
        console.log(descrizionePremiazione)

    } else if (i === 2) {

        annuncioPremiazione = `Infine il terzo classificato è ${qualificati[2].nome} armato di ${qualificati[2].arma} con una potenza pari a ${qualificati[2].potenza}`

        descrizionePremiazione = `*${qualificati[2].nome} sale sul terzo posto del podio e riceve lo Scudo di Bronzo. ${qualificati[2].nome}, nonostante la contentezza di essere arrivato terzo, indossa lo scudo come segno di motivazione per dare di piu al prossimo troneo*`

        console.log(annuncioPremiazione)
        console.log(descrizionePremiazione)

    }

}

// console.log(`Il vincitore del torneo è... ${qualificati[0].nome.toUpperCase}! armato di ${qualificati[0].arma} con una potenza pari a ${qualificati[0].potenza}`)

// console.log(`*${qualificati[0].nome} sale sul primo posto del podio e riceve lo Scudo d'Oro. ${qualificati[1].nome} alza lo scudo cielo soddisfatto e fiero di essere il vincitore*`)

// console.log(`Il secondo classificato invece è... ${qualificati[1].nome.toUpperCase} armato di ${qualificati[1].arma} con una potenza pari a ${qualificati[1].potenza}`)

// console.log(`*${qualificati[1].nome} sale sul secondo posto del podio e riceve lo Scudo d'Argento. ${qualificati[1].nome} tiene lo scudo in mano e lo guarda contento di essere arrivato quasi in cima*`)

// console.log(`Infine il terzo classificato è ${qualificati[2].nome} armato di ${qualificati[2].arma} con una potenza pari a ${qualificati[2].potenza}`)

// console.log(`*${qualificati[2].nome} sale sul terzo posto del podio e riceve lo Scudo di Bronzo. ${qualificati[2].nome}, nonostante la contentezza di essere arrivato terzo, indossa lo scudo come segno di motivazione per dare di piu al prossimo troneo*`)

console.log("E ORA ECCO LA LISTA COMPLETTA DELLE CLASSIFICAZIONI DI TUTTI I COMBATTENTI DEL TRONEO")

qualificati.forEach((qualificato, index) => {
    console.log(`${index + 1}° posto: ${qualificato.nome} armato di ${qualificato.arma} con una potenza pari a ${qualificato.potenza}`)
})

console.log("FINE")







console.log("Il torneo Boolkaichi è alle porte e in tanti sono giunti per mettersi alla prova in questo speciale evento. ci sono 12 posti disponibili")
console.log("I combattenti che sono riusciti a registrarsi sono stati valutati e accanto al loro nome è stato segnato anche il loro livello di potenza. ")
console.log("Il torneo si svolgerà in 5 fasi:")
console.log("1 Iscrizioni e scelta dell'arma")
console.log("2 Allenamento")
console.log("3 Qualificazione")
console.log("4 Combattimento")
console.log("5 Premiazione")




const armiTemplate = ["tirapugni", "pugnale", "spada", "katana", "nunchaku", "ascia", "martello", "mazza dentata", "lancia", "alabarda", "scettro magico", "talismano"]

const combattentiTemplate = [
    { nome: "" },
    { nome: "" },
    { nome: "" },
    { nome: "" },
    { nome: "" },
    { nome: "" },
    { nome: "" },
    { nome: "" },
    { nome: "" },
    { nome: "" },
    { nome: "" },
    { nome: "" }
]

let postiLiberi = 12
const combattenti = [...combattentiTemplate]
const sceltaArma = [...armiTemplate]
console.log("ISCRIZIONI E SCELTA DELL'ARMA")
console.log("Ci sono 12 posti liberi")

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


    combattenti.map((combattente) => {
        if (combattente.name === "") {
            postiLiberi++
        } else {

        }
    })
    postiLiberi--

    console.log(`Ci sono ${postiLiberi} posti liberi`)
    return combattente

})

console.log("Lista partecipanti:", combattenti)
console.log("E' ORA DI ALLENARSI")

combattenti.map((combattente, index) => {

    const incrementoPotenza = Math.floor(Math.random() * 100) + 1;

    combattenti.map((combattente) => combattente.potenza = combattente.potenza * incrementoPotenza)
    console.log(combattenti)

    return combattente

})

console.log("ESITO ALLENAMENTO")

combattenti.map(combattente => console.log(`${combattente.nome} ha aumentato la sua forza, ora è ${combattente.forza}`))

console.log(combattenti)

console.log("CHE IL TORNEO ABBIA INIZIO!")

console.log("Ogni patrecipante combattera in un duello con il patrecipante sucessivo in base all'ordine di qualificazione")

console.log("il duello verra vinto dal combattente con pa potenza maggiore (in caso di parità vincera il combattente che gioca in casa, quindi il primo della coppia: quello a sinistra) ")

console.log("Chi vincerà il duello sfidera il patrecipante seguente, sempre in base all'ordine di qualificazione")


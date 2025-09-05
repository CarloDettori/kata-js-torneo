<aside>
📚 Nome repo: **kata-js-torneo**

Il torneo Boolkaichi è alle porte e in tanti sono giunti per mettersi alla prova in questo speciale evento.

I combattenti che sono riusciti a registrarsi sono stati valutati e accanto al loro nome è stato segnato anche il loro livello di potenza. 

Il torneo si svolgerà in fasi:

- Scelta dell'arma
- Allenamento
- Qualificazione
- Combattimento
- Premiazione

**Utilizzando i metodi degli array (map, filter, sort, slice/splice, push) definire l'algoritmo delle 5 fasi e stampare in console il risultato di ognuna di esse.**

❗L'elenco dei combattenti è rappresentato dall'array **fighters,** quello delle armi dall’array **weapons**. Questi array non vanno modificati!



    **Fase 1 - 🔥 Scelta dell'Arma:** ogni combattente sceglierà casualmente un'arma dalla relativa lista. Una volta scelta, un'arma non sarà più disponibile per i successivi combattenti.

    **Fase 2 - 💪 Allenamento:** ogni combattente si sottoporrà ad un allenamento che incrementerà (o forse no) la sua potenza, moltiplicandola per un numero casuale tra 1 e 100.

    **Fase 3 -  🎯 Qualificazione:** escludiamo dal torneo chi, dopo l'allenamento non è riuscito a raggiungere una potenza di almeno 2000.

    **Fase 4 - ⚔️ Combattimento:** i combattimenti si svolgeranno tra un partecipante e il successivo dell'elenco, assicurandosi che ognuno combatta una sola volta. 

In ogni scontro vincerà il combattente con la potenza più alta. In caso di parità vincerà chi "gioca in casa", ossia chi viene prima nell'elenco.

⚠️ Bisogna assicurarsi che l'elenco contenga un numero pari di combattenti, altrimenti l'ultimo non avrebbe un avversario. Potrebbe essere necessario aggiungere un combattente "Robot" con potenza "4000" all'ultimo minuto.

    **Fase 5 - 🏆 Premiazione:** tra tutti i vincitori degli scontri, saliranno sul podio i 3 combattenti con la potenza più alta, in ordine decrescente.

    🚀 **Bonus 1 - Pannello statistiche:** una volta terminata la logica funzionante, prova a sviluppare una pagina HTML con le statistiche del torneo (ad es. i livelli di potenza, le coppie di combattenti o il podio finale). Adotta lo stile grafico che preferisci. 

    🚀 **Bonus 2 - Controlli interattivi:** implementa nell’interfaccia i pulsanti di start e reset torneo.

    **✨ AI Bonus - Extra stile:** usa l’AI per approfondire e integrare animazioni in CSS; ad esempio su hover delle card dei combattenti, effetto pulse o glow per il podio etc.

Includi il file **README.md** in cui motivi le tue scelte tecniche e spieghi le tue implementazioni.

</aside>
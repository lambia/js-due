const oraAttuale = new Date();
const minutiTrascorsi = oraAttuale.getMinutes();
const minutiInUnOra = 60;

const minutiMancanti = minutiInUnOra - minutiTrascorsi;

console.log("Alla fine dell'ora mancano " + minutiMancanti + "minuti");

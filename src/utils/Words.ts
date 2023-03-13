const listWords = [
  "Romance",
  "Aventura",
  "Mistério",
  "Ficção científica",
  "História",
  "Biografia",
  "Autoajuda",
  "Policial",
  "Suspense",
  "Fantasia",
  "Comédia",
  "Drama",
  "Thriller",
  "Terror",
  "Literatura clássica",
  "Romance histórico",
  "Espionagem",
  "Conto de fadas",
  "Mitologia",
  "Guerra",
  "Espiritualidade",
  "Realismo mágico",
  "Fábula",
  "Ensaios",
  "Crônicas",
  "Poesia",
];

class Words {
  static generateRandom() {
    const indexRandom = Math.floor(Math.random() * listWords.length);

    return listWords[indexRandom];
  }
  static setLimitString(value?: string, limit: number = 180) {
    
    if (typeof value === "undefined") {
      return "";
    }

    const listChar = value.split("");
    const listCharWithLimit = listChar.slice(0, limit);
    const newValue = listCharWithLimit.join("");

    return `${newValue}...`;
  }
};

export default Words;
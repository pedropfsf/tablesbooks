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
};

export default Words;
describe("generateRandom", () => {
  // SET
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
  
  // ACT
  const indexRandom = Math.floor(Math.random() * listWords.length);
  const result = listWords[indexRandom];

  console.log(result);

  it ("testing functionality to generate random words", () => {
    // ASSERT
    expect(listWords.includes(result)).toBeTruthy();
  });
  it ("testing if the function is returning string value", () => {
    // ASSERT
    expect(typeof result).toStrictEqual("string");
  });
});

export default 0;
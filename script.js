const sadrzajKosarica = (function () {
  const kosarica = [];
  const dostava = 10;
  const ukupnaCijena = 250;
  const ukupnaKolicina = 25;

  const dodajKosarica = function (proizvod, kolicina) {
    kosarica.push({ proizvod, kolicina });
    console.log(`${kolicina} ${proizvod} je dodano u košaricu`);
  };

  const narudzba = function (proizvod, kolicina) {
    kosarica.push({ proizvod, kolicina });
    console.log(`${kolicina} ${proizvod} naručena količina`);
  };
  return {
    dodajKosarica,
    kosarica,
    ukupnaCijena,
    ukupnaKolicina,
  };
})();

sadrzajKosarica.dodajKosarica("pasteta", 5);
sadrzajKosarica.dodajKosarica("kruh", 1);
sadrzajKosarica.dodajKosarica("mlijeko", 1);
console.log(sadrzajKosarica);

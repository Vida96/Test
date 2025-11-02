function analiziraj() {
  const tip = document.getElementById('tip-stolice').value;
  const ucestalost = document.getElementById('ucestalost').value;
  const antibiotik = document.getElementById('antibiotik').value;
  const rezultat = document.getElementById('rezultat');

  if (!tip || !ucestalost || !antibiotik) {
    rezultat.innerHTML = "⚠️ Molimo popuni sva polja prije analize.";
    rezultat.classList.remove("hidden");
    return;
  }

  let poruka = "🧠 Preporuka: ";

  if (antibiotik === "da") {
    poruka += "Ako koristiš antibiotike, moguće je poremećaj crijevne flore – razmisli o probiotiku. ";
  }

  if (tip <= 2) poruka += "Stolica je previše tvrda – povećaj unos vlakana i vode.";
  else if (tip == 3 || tip == 4) poruka += "Normalna stolica – sve je u redu, nastavi s trenutnim navikama.";
  else poruka += "Vrlo mekana ili vodena stolica – obavezno pazi na ishranu i unos tečnosti.";

  if (ucestalost > 3) poruka += " Česta stolica može ukazivati na iritaciju crijeva.";

  rezultat.innerHTML = poruka;
  rezultat.classList.remove("hidden");
}

function posaljiMail() {
  alert("📩 Ova opcija će slati podatke na e-mail farmaceutu (demo verzija).");
}

function analiziraj() {
  const rezultat = document.getElementById("rezultat");
  const ucestalost = Number(document.getElementById("ucestalost").value);
  const intenzitet = Number(document.getElementById("intenzitet").value);

  const simptomi = Array.from(
    document.querySelectorAll('input[name="simptomi"]:checked')
  ).map(el => el.value);

  const drugiSimptomi = document
    .getElementById("drugiSimptomi")
    .value.trim();

  let poruka =
    "Na osnovu dostupnih podataka preporučuje se praćenje simptoma i prilagođavanje prehrambenih navika.";

  /* 1️⃣ Bez simptoma */
  if (simptomi.length === 0 && !drugiSimptomi && ucestalost === 0) {
    poruka =
      "Trenutno nisu prisutni simptomi koji ukazuju na poremećaj probavne funkcije. Preporučuje se nastavak uravnotežene prehrane i zdravih životnih navika.";
  }

  /* 2️⃣ Blagi simptomi */
  else if (intenzitet === 1 && ucestalost <= 1) {
    poruka =
      "Prisutni su blagi i rijetki simptomi koji mogu biti prolaznog karaktera. Preporučuje se adekvatan unos tečnosti, lagana ishrana i praćenje eventualnih promjena.";
  }

  /* 3️⃣ Umjereni simptomi */
  else if (intenzitet === 2 && ucestalost <= 2) {
    poruka =
      "Uočeni su umjereni simptomi probavnih smetnji. Savjetuje se privremeno izbjegavanje masne, začinjene i teško probavljive hrane.";
  }

  /* 4️⃣ Izraženi simptomi */
  else if (intenzitet >= 3 || ucestalost >= 3) {
    poruka =
      "Simptomi su izraženiji po intenzitetu ili učestalosti. Preporučuje se konsultacija sa zdravstvenim radnikom radi dalje procjene.";
  }

  /* 5️⃣ Mučnina */
  if (simptomi.includes("Mučnina")) {
    poruka =
      "Mučnina može ukazivati na iritaciju gornjeg dijela digestivnog trakta ili prehrambenu netoleranciju. Preporučuju se manji i češći obroci.";
  }

  /* 6️⃣ Žgaravica */
  if (simptomi.includes("Žgaravica")) {
    poruka =
      "Žgaravica može biti povezana s gastroezofagealnim refluksom. Savjetuje se izbjegavanje kafe, alkohola, čokolade i kasnih obroka.";
  }

  /* 7️⃣ Bol u stomaku */
  if (simptomi.includes("Bol u stomaku")) {
    poruka =
      "Bol u abdomenu može imati različite uzroke. Ukoliko bol traje, pojačava se ili je praćen drugim simptomima, preporučuje se ljekarski pregled.";
  }

  /* 8️⃣ Podrigivanje */
  if (simptomi.includes("Podrigivanje")) {
    poruka =
      "Učestalo podrigivanje može biti povezano sa usporenom probavom ili gutanjem zraka. Preporučuje se sporije uzimanje hrane i izbjegavanje gaziranih napitaka.";
  }

  /* 9️⃣ Višestruki simptomi */
  if (simptomi.length >= 3) {
    poruka =
      "Prisutan je veći broj različitih simptoma, što može ukazivati na kompleksnije probavne smetnje. Savjetuje se detaljnija medicinska procjena.";
  }

  /* 🔟 Dodatni simptomi */
  if (drugiSimptomi.length > 3) {
    poruka =
      "Prijavljeni su dodatni simptomi koji nisu obuhvaćeni osnovnom listom. Ukoliko se simptomi zadržavaju, preporučuje se konsultacija sa zdravstvenim radnikom.";
  }

  /* 1️⃣1️⃣ Visok intenzitet + učestalost */
  if (intenzitet >= 3 && ucestalost >= 3) {
    poruka =
      "Kombinacija visoke učestalosti i intenziteta simptoma zahtijeva pravovremenu medicinsku evaluaciju.";
  }

  rezultat.classList.remove("hidden");
  rezultat.innerHTML = `
    <div class="p-4 bg-green-50 border border-green-200 rounded-xl text-sm leading-relaxed">
      <strong>Stručni savjet:</strong>
      <p class="mt-2">${poruka}</p>
    </div>
  `;
}

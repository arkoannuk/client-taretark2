<script setup>

</script>

<template>
  <div class="text-start lg:text-start text-neutral">
    <!-- <h2 class="pb-5 text-2xl sm:text-4xl font-bold">
      Täpsem info
    </h2> -->
    <p class="pb-2.5 sm:text-lg">
      See puhkemaja on osa ühest suuremast majutuskompleksist, mis on fokuseeritud majutamaks turiste, seega asub antud ruum jagatud hooviga suurema maja kõrval.
    </p>
    <p class="text-md sm:text-lg h-max line-clamp-3">
      Antud puhkemaja sisaldab järgnevaid elemente: suur voodi, diivan-voodi, tühi kummut asjade jaoks, smart-TV, mini-köök (sisaldab külmkappi, veekeetjat ja kohvi+tee materiali). Lisaks on ka koht kus saad riputada enda riideid, asetada pagasit, jalanõusi jne.
    </p>

    <button class="font-bold text-left w-fit pt-2.5" onclick="my_modal_1.showModal()">
      <span class="underline">Kuva rohkem</span> >
    </button>
    <dialog id="my_modal_1" class="modal">
      <div class="modal-box max-w-3xl">
        <form method="dialog">
          <button class="btn btn-sm btn-circle btn-ghost absolute right-5 top-6">
            x
          </button>
        </form>
        <h3 class="font-bold text-lg">
          Teave selle ruumi kohta
        </h3>
        <p class="py-4">
          See stuudio on osa ühest suuremast majutuskompleksist, mis on fokuseeritud majutamaks turiste, seega asub antud ruum jagatud hooviga suurema maja kõrval. Siiski paneme rõhku külaliste privaatsuse tagamiseks, olles loonud aia, mis eraldab teid teistest kompleksis viibivatest külalistest.
          <br><br>
          Antud ruum sisaldab järgnevaid elemente: suur voodi, diivan-voodi, tühi kummut asjade jaoks, smart-TV, mini-köök (sisaldab külmkappi, veekeetjat ja kohvi+tee materiali). Lisaks on ka koht kus saad riputada enda riideid, asetada pagasit, jalanõusi jne.
          <br><br>
          Meie külalistele on määratud privaatne õueala. Meil on koer kes ei ole ohtlik aga üsnagi hüperaktiivne (Husky tõug!). Seetõttu oleme eraldanud koera ala elektrikarjusega.
          <br><br>
          Külalistele eraldatud hoov on mahukas ja kena. Külalistele on ka ettemääratud kindel parkimiskoht ja tee, mis viib otse majutuse ukseni. Teejuhtiteks oleme pannud ka mõned viitavad märgid. Meil on ka tiik kus saab ujuda ning ka kaks sauna (mille kasutus ei ole hinna sees). Antud alad on ümbritsetud suure terassiga.
          <br><br>
          Viimaks, kui soovite grillida, andke meile teada, et meil oleks aega seda teile korralikult ette valmistada!
        </p>
        <div class="modal-action">
          <form method="dialog">
            <button class="btn">
              Välju
            </button>
          </form>
        </div>
      </div>
    </dialog>
  </div>
</template>

<style lang="scss" scoped>

</style>

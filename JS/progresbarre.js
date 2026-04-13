     window.onscroll = function() { updateProgressBar() };

    function updateProgressBar() {
      // Calcola quanto ha scrollato l'utente
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      // Calcola l'altezza totale scrollabile (Altezza pagina - Altezza finestra)
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      // Trasforma in percentuale
      var scrolled = (winScroll / height) * 100;
      // Applica alla barra fucsia
      document.getElementById("myBar").style.width = scrolled + "%";
    };
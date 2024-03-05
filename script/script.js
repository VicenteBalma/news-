

// PAGE LOADER //

document.addEventListener("DOMContentLoaded", function() {
  // Simula un retraso de 1.5 segundos (1500 milisegundos)
  setTimeout(function() {
      document.getElementById("loader-wrapper").style.display = "none";
      document.getElementById("content").style.display = "block";
  }, 2500);
});





document.querySelectorAll(".copy-link").forEach(copyLinkContainer => {
  const inputField = copyLinkContainer.querySelector(".copy-link-input");
  const copyButton = copyLinkContainer.querySelector(".copy-link-button");
  

  inputField.addEventListener("focus", () => inputField.ariaSelected());

  copyButton.addEventListener("click", () => {
      const text = inputField.value;

      inputField.select();
      navigator.clipboard.writeText(text);

      inputField.value = "Copiado!";
      setTimeout(() =>inputField.value = text, 2000);
  })
});

  // NAV BAR //

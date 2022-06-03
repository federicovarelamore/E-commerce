const imagenModal = document.querySelector("#modal-image");

if (imagenModal) {
  imagenModal.addEventListener("show.bs.modal", function (event) {
    const enlace = event.relatedTarget;
    const rutaImagen = enlace.getAttribute("data-bs-image");

    // Construir la IMG
    const imagen = document.createElement("IMG");
    imagen.src = `img/${rutaImagen}.jpg`;

    imagen.classList.add("img-fluid");
    imagen.alt = "Imagen Galería";

    // Inyectar en el HTML
    const contenidoModal = document.querySelector(".modal-body");
    contenidoModal.appendChild(imagen);
  });

  imagenModal.addEventListener("hidden.bs.modal", () => {
    const contenidoModal = document.querySelector(".modal-body");
    contenidoModal.lastChild.remove();
  });
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

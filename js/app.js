const ImagenModal = document.querySelector("#modal-image");

ImagenModal.addEventListener("show.bs.modal", function (event) {
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

ImagenModal.addEventListener("hidden.bs.modal", () => {
  const contenidoModal = document.querySelector(".modal-body");
  contenidoModal.lastChild.remove();
});

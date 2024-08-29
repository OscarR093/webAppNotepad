

import { Nota } from "./nota.js";
import { UI } from "./ui.js";

// Evento listener de agregar
document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const name = document.getElementById("nombre").value;
    const description = document.getElementById("nota").value;
    const actual_date = new Date();

    // Crear instancia de Nota (asegúrate de que la clase se llama Nota con mayúscula)
    const nota = new Nota(name, description, actual_date);

    // Crear instancia de UI
    const ui = new UI();

    // Pasar la instancia de nota, no la clase
    ui.addNote(nota);

    ui.resetForm();

});

document.getElementById("Showlist").addEventListener("click", (e) => {
    const ui = new UI();
    ui.deleteProduct(e.target);
    e.preventDefault();
  });
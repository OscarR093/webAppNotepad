/**
 * User Interface Class
 */
export class UI {
    /**
     * Add a New Product 
     * @param {Object} product A new product Object
     */
    addNote(nota) {
      const noteList = document.getElementById("Showlist");
      const element = document.createElement("div");
      element.innerHTML = `
              <div class="card text-center mb-4">
                  <div class="card-body">
                      <strong>Nombre</strong>: ${nota.name} -
                      <strong>Fecha</strong>: ${nota.actual_date} - 
                      <a href="#" class="btn btn-danger" name="delete">Delete</a>
                  </div>
              </div>
          `;
      noteList.appendChild(element);
    }
  
    /**
     * Reset Form Values
     */
    resetForm() {
      document.getElementById("formulario").reset();
    }
  
    deleteProduct(element) {
      if (element.name === "delete") {
        element.parentElement.parentElement.remove();
        this.showMessage("Product Deleted Succsssfully", "success");
      }
    }
  
    showMessage(message, cssClass) {
      const div = document.createElement("div");
      div.className = `alert alert-${cssClass} mt-2`;
      div.appendChild(document.createTextNode(message));
  
      // Show in The DOM
      const container = document.querySelector(".container");
      const app = document.querySelector("#App");
  
      // Insert Message in the UI
      container.insertBefore(div, app);
  
      // Remove the Message after 3 seconds
      setTimeout(function () {
        document.querySelector(".alert").remove();
      }, 3000);
    }
  }
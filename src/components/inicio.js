
import React, { useState } from "react";






function Inicio(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
    // Arreglo de descripciones
    const descriptions = [
      "Una receta deliciosa para disfrutar en familia.",
      "Aprende a hacer esta receta en pocos minutos.",
      "Sorprende a todos con este plato sencillo y rápido.",
      "Una receta deliciosa para disfrutar en familia.",
      "Aprende a hacer esta receta en pocos minutos.",
      "Sorprende a todos con este plato sencillo y rápido.",
      "Una receta deliciosa para disfrutar en familia.",
      "Aprende a hacer esta receta en pocos minutos.",
      "Sorprende a todos con este plato sencillo y rápido.",
      "Sorprende a todos con este plato sencillo y rápido.",
    ];
    const handleOpenModal = (recipeIndex) => {
      setSelectedRecipe(recipeIndex);
      setModalVisible(true);
    };
  
    const handleCloseModal = () => {
      setModalVisible(false);
      setSelectedRecipe(null);
    };
  
  return (

<div>
      {/* Header */}
     

      {/* Main Content */}
      <main>
        {/* Main Carousel */}
        <section className="bg-white py-4">
  <div className="container">
    <div
      id="imageCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000" // Mueve las imágenes automáticamente cada 3 segundos
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="/images/image1.jpg"
            className="d-block w-100"
            alt="Imagen 1"
            style={{ height: "300px", objectFit: "cover" }}
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/image2.jpg"
            className="d-block w-100"
            alt="Imagen 2"
            style={{ height: "300px", objectFit: "cover" }}
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/image3.jpg"
            className="d-block w-100"
            alt="Imagen 3"
            style={{ height: "300px", objectFit: "cover" }}
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#imageCarousel"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#imageCarousel"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</section>


        {/* Top Recipes */}
        <section className="bg-white py-4">
      <div className="container">
        <h2 className="text-center mb-4">Top 10 Recetas</h2>
        <div className="row">
          {[...Array(10)].map((_, index) => (
            <div className="col-6 col-md-3 mb-4" key={index}>
              <div className="card h-100">
                <video
                  className="card-img-top rounded"
                  style={{ height: "150px", objectFit: "cover" }}
                  controls
                  muted
                  loop
                >
                  <source
                    src={`/videos/recipe${index + 1}.mp4`}
                    type="video/mp4"
                  />
                  Tu navegador no soporta videos.
                </video>
                <div className="card-body">
                  <p className="card-text">
                    {descriptions[index] || "Sin descripción disponible."}
                  </p>
                </div>
                <div className="card-footer text-center">
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => handleOpenModal(index)}
                  >
                    Ver receta completa
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalVisible && (
        <div className="modal" style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Receta {selectedRecipe + 1}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body">
                <video
                  style={{ width: "100%", height: "auto" }}
                  controls
                  muted
                  loop
                >
                  <source
                    src={`/videos/recipe${selectedRecipe + 1}.mp4`}
                    type="video/mp4"
                  />
                  Tu navegador no soporta videos.
                </video>
                <p className="mt-3">
                  {descriptions[selectedRecipe] || "Sin descripción disponible."}
                </p>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={handleCloseModal}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>


      </main>

     
      
<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
  defer
></script>
    </div>

    









  );
}
export default Inicio;

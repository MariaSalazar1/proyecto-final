import React, { useState } from "react";


function Inicio(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // Datos completos de las recetas
  const recipes = [
    {
      title: "Macarrones a la Mallorquina",
      description:
        "Un delicioso plato de macarrones al estilo mallorquín, perfecto para compartir.",
      ingredients: [
        "Macarrones",
        "Tomate",
        "Aceite de oliva",
        "Cebolla",
        "Ajo",
        "Especias al gusto",
      ],
    },
    {
      title: "Tostada crujiente de queso con huevo",
      description:
        "Tostadas de mantequilla y ajo, crujientes y deliciosas, ideales para el desayuno.",
      ingredients: [
        "Pan de molde",
        "Jamón",
        "Queso y mozzarella",
        "Huevo",
        "Sal, pimienta, perejil",
        "Mayonesa o ajo, mantequilla y miel",
      ],
    },
    {
      title: "Receta de pollo en salsa",
      description:
        "Chips de pollo crujientes, suaves por dentro, perfectos para bocadillos o comidas.",
      ingredients: [
        "150 g de pechuga de pollo",
        "Huevo",
        "Polvo para freír",
        "Pan rallado",
        "Sal y pimienta",
      ],
    },
    {
      title: "Omelet de queso y plátano",
      description:
        "Un omelet perfecto para el brunch, con plátanos dulces y queso derretido.",
      ingredients: [
        "Plátano",
        "Huevos",
        "Salchichas",
        "Cebolla",
        "Mozzarella",
      ],
    },
    {
      title: "Tostada francesa en cubos",
      description:
        "Tostadas francesas crujientes por fuera y suaves por dentro, ideales para el desayuno.",
      ingredients: [
        "Pan",
        "Huevos",
        "Nata fresca",
        "Mantequilla",
        "Extracto de vainilla",
        "Canela en polvo",
        "Azúcar",
      ],
    },
    {
      title: "Camarones de bolsillo de calabacín",
      description:
        "Panqueques de camarones y calabacín, deliciosos y fáciles de preparar.",
      ingredients: [
        "Calabacín",
        "Camarones",
        "Cebolla verde",
        "Cebolla",
        "Zanahorias",
        "Pimiento rojo en polvo",
        "Huevo",
        "Almidón de patata",
        "Sal, salsa de soja",
      ],
    },
    {
      title: "Rollos de ensalada",
      description:
        "Rollos frescos y crujientes con verduras sobrantes, perfectos para un almuerzo ligero.",
      ingredients: [
        "Repollo",
        "Pimiento morrón",
        "Carne de cangrejo",
        "Brotes de rábano",
        "Manzana",
        "Hojas de perilla",
        "Algas secas",
        "Rábano en escabeche",
      ],
    },
    {
      title: "Tostada de huevo, queso y jamón",
      description:
        "Tostadas rellenas de jamón y queso con un toque crujiente y mantecoso.",
      ingredients: [
        "Pan de molde",
        "Jamón",
        "Queso",
        "Mantequilla",
        "Huevo",
      ],
    },
    {
      title: "Pastel de pudín de chocolate",
      description:
        "Un pastel suave y delicioso de chocolate, fácil de preparar sin moldes especiales.",
      ingredients: ["Chocolate", "Leche", "Azúcar", "Agar"],
    },
    {
      title: "Pastel de yogur",
      description:
        "Un pastel húmedo y esponjoso de yogur griego, sin harina ni mantequilla.",
      ingredients: [
        "Yogur griego",
        "Huevos",
        "Almidón de maíz",
        "Azúcar y sal",
        "Jugo de limón",
      ],
    },
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
      <main>
        {/* Top Recipes */}
        <section className="bg-white py-4">
          <div className="container">
            <h2 className="text-center mb-4">Top 10 Recetas</h2>
            <div className="row">
              {recipes.map((_, index) => (
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
                        {recipes[index].description || "Sin descripción disponible."}
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
            <div
              className="modal"
              style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">{recipes[selectedRecipe].title}</h5>
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
                    <p className="mt-3">{recipes[selectedRecipe].description}</p>
                    <ul>
                      {recipes[selectedRecipe].ingredients.map((ingredient, i) => (
                        <li key={i}>{ingredient}</li>
                      ))}
                    </ul>
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
    </div>
  );
}
export default Inicio;

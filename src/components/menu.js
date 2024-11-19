import React from "react";



export const Menuprincipal = () => {
    return(

      <header style={{ backgroundColor: '#ffdf4d' }} className="text-white py-3">
        <div className="container d-flex justify-content-between align-items-center">
          <h1 className="h4">PANCHOTE</h1>
          <input
            type="text"
            className="form-control w-50"
            placeholder="Busca una receta, ingrediente, palabra clave..."
          />
          <div className="d-flex gap-2">
            <button className="btn btn-light text-success">Suscríbete</button>
            <button className="btn btn-light text-success">Conéctate</button>
          </div>
        </div>
      </header>

		
    )
    
}
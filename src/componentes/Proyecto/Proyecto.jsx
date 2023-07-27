import React from 'react'

const Proyecto = () => {
    const containerStyle = {
        width: '80%',
        height: '300px',
        borderRadius: '21px 21px 0 0',
      };
    
  return (
<section 
id='projects'
className="row my-md-3">
  <h1 className="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden" >PROYECTOS</h1>
    <div className="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div className="my-3 py-3">
        <h3 className="display-5">M R Propiedades</h3>
        <p className="lead">Proyectpo Final en Soy Henry.</p>
      </div>
      <div className="bg-body-tertiary shadow-sm mx-auto" style={containerStyle}></div>
    </div>
    <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div className="my-3 p-3">
        <h3 className="display-5">Aplicacion Videogames</h3>
        <p className="lead">Proyecto individual en Soy Henry.</p>
      </div>
      <div className="bg-dark shadow-sm mx-auto" style={containerStyle}></div>
    </div>
    <div className="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div className="my-3 p-3">
        <h3 className="display-5">Aplicacion Rick n Morty</h3>
        <p className="lead">Proyecto individual Soy Henry.</p>
      </div>
      <div className="bg-body-tertiary shadow-sm mx-auto" style={containerStyle}></div>
    </div>
  </section>
  )
}

export default Proyecto

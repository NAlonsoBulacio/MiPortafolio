import React from "react";
import projects from "../../constants/index";
import { FaGithub } from "react-icons/fa";
import { BsArrowUpRightCircle } from "react-icons/bs";
import "./Proyecto.css";
const Proyecto = () => {
  const containerStyle = {
    width: "80%",
    height: "300px",
    borderRadius: "21px 21px 0 0",
  };
  const divStyle = {
    flexShrink: 0,
    maxWidth: "100%",
  };

  return (
    <section id="projects" className="row my-md-3 overflow-hidden">
      <div className="overflow-hidden">
      <div className="overflow-hidden">
      <h1 className="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center">
        PROYECTOS
      </h1>
      </div>
      <div className="hr-container">
        <hr className="custom-hr" />
      </div>
      <div className="row text-bg-dark row-cols-1 row-cols-md-2 justify-content-center overflow-hidden" style={{ marginRight: "0px" }} >
        <div className="col custom-project overflow-hidden">
          <div className=" my-1 py-1">
            <h3 className="display-5">M R Propiedades</h3>
            <p className="lead">Proyectpo Final en Soy Henry.</p>
          </div>
          <div className="card shadow-sm">
            <a
              href={projects[0].deploy || projects[0].github}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="bd-placeholder-img card-img-top"
                src={projects[0].image}
                width="100%"
                height="225"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              />
            </a>
            <div className="card-body">
              <p className="card-text">
                Diseñar y desarrollar una App de venta y alquiler de bienes
                raíces que incluía: autenticación, búsquedas, filtrados
                combinados, ordenamientos, baneo de usuarios, envío de emails, etc
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex gap-2" style={{marginLeft: "-15px"}}>
                  {projects[0].technologies.map((t, index) => (
                    <span key={index}>{t}</span>
                  ))}
                </div>
                <div className="d-flex gap-2">
                  {projects[0].github && (
                    <a
                      className="hover-translate-y-1 duration-300"
                      href={projects[0].github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub size={40} />
                    </a>
                  )}
                  <a
                    className="hover-rotate-45 duration-300"
                    href={projects[0].deploy}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsArrowUpRightCircle size={40} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col custom-project overflow-hidden">
          <div className="my-1 py-1">
            <h3 className="display-5">Aplicación Videogames</h3>
            <p className="lead">Proyectpo Individual en Soy Henry.</p>
          </div>
          <div className="card shadow-sm">
            <a
              href={projects[1].deploy || projects[1].github}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="bd-placeholder-img card-img-top"
                src={projects[1].image}
                width="100%"
                height="225"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              />
            </a>
            <div className="card-body">
              <p className="card-text">
                Diseñar y desarrollar una web de videojuegos que incluye
                búsqueda de videojuegos, filtros combinados y la creación de
                nuevos videojuegos.
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex gap-2">
                  {projects[1].technologies.map((t, index) => (
                    <span key={index}>{t}</span>
                  ))}
                </div>
                <div className="d-flex gap-2">
                  {projects[1].github && (
                    <a
                      className="hover-translate-y-1 duration-300"
                      href={projects[1].github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub size={40} />
                    </a>
                  )}

                  <a
                    className="hover-rotate-45 duration-300"
                    href={projects[1].deploy}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsArrowUpRightCircle size={40} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Proyecto;

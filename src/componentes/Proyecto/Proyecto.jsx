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

  return (
    <section id="projects" classNameName="row my-md-3">
      <h1 classNameName="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
        PROYECTOS
      </h1>
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div classNameName="my-1 py-1">
            <h3 classNameName="display-5">M R Propiedades</h3>
            <p classNameName="lead">Proyectpo Final en Soy Henry.</p>
          </div>
          <div className="card shadow-sm">
            <a href={projects[0].deploy || projects[0].github} target="_blank" rel="noreferrer">
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
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <div classNameName="d-flex gap-2">
                  {projects[0].technologies.map((t, index) => (
                    <span key={index}>{t}</span>
                  ))}
                </div>
                <div classNameName="d-flex gap-2">
                  {projects[0].github && (
                    <a
                      classNameName="hover-translate-y-1 duration-300"
                      href={projects[0].github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub size={40} />
                    </a>
                  )}
                  <a
                    classNameName="hover-rotate-45 duration-300"
                    href={projects[0].deploy}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsArrowUpRightCircle size={40} />
                  </a>
                </div>
                <small className="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div classNameName="my-1 py-1">
            <h3 classNameName="display-5">M R Propiedades</h3>
            <p classNameName="lead">Proyectpo Final en Soy Henry.</p>
          </div>
          <div className="card shadow-sm">
            <a href={projects[1].deploy || projects[1].github} target="_blank" rel="noreferrer">
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
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <div classNameName="d-flex gap-2">
                  {projects[1].technologies.map((t, index) => (
                    <span key={index}>{t}</span>
                  ))}
                </div>
                <div classNameName="d-flex gap-2">
                  {projects[1].github && (
                    <a
                      classNameName="hover-translate-y-1 duration-300"
                      href={projects[1].github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub size={40} />
                    </a>
                  )}

                  <a
                    classNameName="hover-rotate-45 duration-300"
                    href={projects[1].deploy}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsArrowUpRightCircle size={40} />
                  </a>
                </div>
                <small className="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proyecto;

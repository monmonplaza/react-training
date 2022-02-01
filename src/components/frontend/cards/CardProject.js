import React from "react";

const CardProject = ({ project }) => {
  return (
    <>
      <div className="card__item" key={project.id}>
        <h4 className="text--primary">{project.title}</h4>
        <figure>
          <img src={project.img} alt="123" />
          {project.isPct && (
            <div className="bar">
              <div
                className="pct__label__front"
                style={{ clipPath: `inset(0 0 0 ${project.amt}%)` }}
              >
                {`${project.amt}%`} Completed
              </div>
              <div className="pct__label__back">
                {`${project.amt}%`} Completed
              </div>
            </div>
          )}
        </figure>

        <p>{project.description}</p>

        <button className="btn btn--primary">Donate Now</button>
      </div>
    </>
  );
};

export default CardProject;

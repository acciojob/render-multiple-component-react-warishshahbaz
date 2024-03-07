import React from "react";

function ChildCom({ item }) {
  return (
    <div className="ns-wrapper">
      <h data-ns-test="project-name">{item.name}</h>
      <h6 data-ns-test="project-description">{item.description}</h6>
    </div>
  );
}

export default ChildCom;

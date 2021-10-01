import React from "react";

const GrandChild = ({ ux, name, lastName }) => {
  return (
    <div className={`${ux.person} ${ux.third}`}>
      {name}
      {!!lastName && (
          <span> {lastName}</span>
      )}
    </div>
  );
};

export default GrandChild;
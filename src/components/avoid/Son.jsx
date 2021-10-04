import React, { Children } from "react";

const Son = ({ className, name, lastName, children }) => {
  return (
    <div className={className}>
      {name}
      {!!lastName && (
        <span> {lastName} </span>
      )}

      {children}
    </div>
  );
};

export default Son;
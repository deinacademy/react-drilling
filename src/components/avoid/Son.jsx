import React, { Children } from "react";

const Son = ({ className, name, lastName }) => {
  return (
    <div className={className}>
      {name}
      {!!lastName && (
        <span> {lastName} </span>
      )}
    </div>
  );
};

export default Son;
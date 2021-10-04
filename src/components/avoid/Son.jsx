import React, { Children } from "react";

const Son = ({ className, name, lastName }) => {
  return (
    <div className={className}>
      <div>
        {name}
        {!!lastName && (
          <span> {lastName} </span>
        )}
      </div>
    </div>
  );
};

export default Son;
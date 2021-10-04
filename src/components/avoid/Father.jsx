import React from "react";

const Father = ({ className, name, lastName}) => {
  return (
    <div className={className}>
      {name}
      {!!lastName && (
        <span> {lastName}</span>
      )}
    </div>
  );
};

export default Father;
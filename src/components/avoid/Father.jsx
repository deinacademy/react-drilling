import React, { useState, Children} from "react";

const Father = ({ className, name, lastName, children}) => {
  return (
      <div className={className}>
        {name}
        {!!lastName && (
          <span> {lastName}</span>
        )}
        
        {children}
      </div>
  );
};

export default Father;
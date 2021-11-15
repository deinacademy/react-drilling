import React, { useState, Children} from "react";

const Father = ({ className, name, lastName, children}) => {
  return (
    <div className={className}>
      {name}
      {!!lastName && (
        <span> {lastName}</span>
      )}

      {Children.map(children, (child) => {
        const inheritance = {
          key: crypto.randomUUID()
        }
        if (!!lastName && !("lastName" in child.props)) {
          inheritance.lastName = lastName
        }
        return <child.type {...child.props} {...inheritance}/>;
      })}
    </div>
  );
};

export default Father;
import React, { Children } from "react";

const Son = ({ className, name, lastName, children }) => {
  return (
    <div className={className}>
      {name}
      {!!lastName && (
        <span> {lastName} </span>
      )}
      
      {Children.map(children, (child, i) => {
        const inheritance = {
          key: i
        }
        if (!!lastName && !("lastName" in child.props)) {
          inheritance.lastName = lastName
        }
        return <child.type {...child.props} {...inheritance}/>;
      })}
    </div>
  );
};

export default Son;
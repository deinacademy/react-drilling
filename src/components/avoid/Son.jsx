import React, { Children } from "react";

const Son = ({ className, name, lastName, children, setNumber }) => {
  return (
    <div className={className}>
      {name}
      {!!lastName && (
        <span> {lastName} </span>
      )}
      { !!setNumber && <button onClick={() =>setNumber(number => number +1) }>Add</button>}
    
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
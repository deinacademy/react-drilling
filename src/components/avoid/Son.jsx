import React, { Children } from "react";

const Son = ({ ux, name, lastName, children, setNumber }) => {
  return (
    <div className={ux}>
      <div>
        {name}{" "}
        {!!lastName && (
          <>
          <span> {lastName} </span>
          </>
        )}
        { !!setNumber && <button onClick={() =>setNumber(number => number +1) }>Add</button>}
      </div>

      {Children.map(children, (child, i) => {
        return <child.type {...child.props} key={i} lastName={lastName}/>;
      })}
    </div>
  );
};

export default Son;
import React, { useState, Children} from "react";

const Father = ({ className, name, lastName, children}) => {
  const [number, setNumber] = useState(0)

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
        if (!!lastName && !("lastName" in child.props) && (typeof child.type !== 'string')) {
          inheritance.lastName = lastName
        }

        if (child.props.name === "Camilo") {
          inheritance.setNumber = setNumber
        }

        return (
          <>
            {!!inheritance.setNumber && <>:<span> {number} </span></>}
            <child.type {...child.props} {...inheritance}/>
          </>
        );
      })}
    </div>
  );
};

export default Father;
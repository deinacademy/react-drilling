import React, { useState, Children} from "react";

const Father = ({ className, name, lastName, children}) => {
  const [number, setNumber] = useState(0)

  return (
      <div className={className}>
        {name}
        {!!lastName && (
          <span> {lastName}</span>
        )}

        {Children.map(children, (child, i) => {
          const inheritance = {
            key: i
          }
          if (!!lastName && !("lastName" in child.props)) {
            inheritance.lastName = lastName
          }

          if (child.props.name === "Camilo") {
            return (
              <>
                : <span> {number} </span>
                <child.type {...child.props} {...inheritance} setNumber={setNumber} />
              </>
            );
          } else {
            return <child.type {...child.props} {...inheritance} />;
          }
        })}
      </div>
  );
};

export default Father;
import React from "react";

const GrandChild = ({ styles, name, lastName }) => {
  return (
    <div className={`${styles.person} ${styles.third}`}>
      {name}
      {!!lastName && (
          <span> {lastName}</span>
      )}
    </div>
  );
};

export default GrandChild;
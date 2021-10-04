import React from "react";

const Parent = ({ styles, nameParent, lastName }) => {
  return (
    <div className={`${styles.person} ${styles.first}`}>
      {nameParent}
      {!!lastName && (
          <span> {lastName}</span>
      )}
    </div>
  );
};

export default Parent;
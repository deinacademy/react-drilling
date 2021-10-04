import React from "react";

const Child = ({ styles, nameChild, lastName }) => {
  return (
    <div className={`${styles.person} ${styles.second}`}>
      {nameChild}
      {!!lastName && (
          <span> {lastName}</span>
      )}
    </div>
  );
};

export default Child;
import React from "react";
import Child from "./Child";

const Parent = ({ styles, nameParent, nameChild, nameGrandChild, lastName }) => {
  return (
    <div className={`${styles.person} ${styles.first}`}>
      {nameParent}
      {!!lastName && (
          <span> {lastName}</span>
      )}

      <Child
        styles={styles}
        nameChild={nameChild}
        nameGrandChild={nameGrandChild}
        lastName={lastName}
      />
    </div>
  );
};

export default Parent;
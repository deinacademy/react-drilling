import React from "react";
import GrandChild from "./GrandChild";

const Child = ({ styles, nameChild, nameGrandChild, lastName }) => {
  return (
    <div className={`${styles.person} ${styles.second}`}>
      {nameChild}
      {!!lastName && (
          <span> {lastName}</span>
      )}
      
      <GrandChild styles={styles} name={nameGrandChild} lastName={lastName} />
    </div>
  );
};

export default Child;
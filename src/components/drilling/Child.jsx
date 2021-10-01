import React from "react";
import GrandChild from "./GrandChild";

const Child = ({ ux, nameChild, nameGrandChild, lastName }) => {
  return (
    <div className={`${ux.person} ${ux.second}`}>
      {nameChild}
      {!!lastName && (
          <span> {lastName}</span>
      )}
      
      <GrandChild ux={ux} name={nameGrandChild} lastName={lastName} />
    </div>
  );
};

export default Child;
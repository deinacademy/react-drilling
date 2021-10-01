import React from "react";
import Child from "./Child";

const Parent = ({ ux, nameParent, nameChild, nameGrandChild, lastName }) => {
  return (
    <div className={`${ux.person} ${ux.first}`}>
      {nameParent}
      {!!lastName && (
          <span> {lastName}</span>
      )}

      <Child
        className={ux.second}
        ux={ux}
        nameChild={nameChild}
        nameGrandChild={nameGrandChild}
        lastName={lastName}
      />
    </div>
  );
};

export default Parent;
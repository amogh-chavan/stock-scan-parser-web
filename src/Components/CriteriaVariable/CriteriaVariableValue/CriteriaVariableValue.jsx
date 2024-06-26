import React from "react";
import style from "./CriteriaVariableValue.module.scss";
import { useLocation } from "react-router-dom";

const CriteriaVariableValue = () => {
  const location = useLocation();
  const { variable } = location.state || {};

  return (
    <div className={style.criteria_variable}>
      {variable?.values
        ?.sort((a, b) => a - b)
        .map((item, index) => {
          return (
            <p key={index} className={style.criteria_variable__value}>
              {item}
            </p>
          );
        })}
    </div>
  );
};

export default CriteriaVariableValue;

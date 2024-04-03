import React, { useState } from "react";
import style from "./CriteriaVariableIndicator.module.scss";
import { useLocation } from "react-router-dom";

const CriteriaVariableIndicator = () => {
  const location = useLocation();
  const { variable } = location.state || {};
  const [parameter, setParameter] = useState(variable.default_value);

  return (
    <div className={style.CriteriaVariableIndicator}>
      <div>
        <div className={style.CriteriaVariableIndicator__study_type}>
          {variable.study_type.toUpperCase()}
        </div>
        <div className={style.CriteriaVariableIndicator__set_parameters}>
          Set Parameters
        </div>
      </div>
      <div
        className={
          style.CriteriaVariableIndicator__variable_indicator_container
        }
      >
        <div>
          <label>{variable.parameter_name}</label>
        </div>
        <div>
          <input
            type="number"
            value={parameter}
            onChange={(e) => setParameter(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default CriteriaVariableIndicator;

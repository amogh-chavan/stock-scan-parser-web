import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const CriteriaVariableIndicator = () => {
  const location = useLocation();
  const { variable } = location.state || {};
  const [parameter, setParameter] = useState(variable.default_value);

  return (
    <div>
      <div>
        <div>{variable.study_type.toUpperCase()}</div>
        <div>Set Parameters</div>
      </div>
      <div>
        <div>
          <label>{variable.parameter_name}</label>
          <div>
            <input
              type="number"
              value={parameter}
              onChange={(e) => setParameter(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CriteriaVariableIndicator;

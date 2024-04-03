import styles from "./App.module.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Scans from "./Components/Scans/Scans";
import Criteria from "./Components/Criteria/Criteria";
import CriteriaVariableValue from "./Components/CriteriaVariable/CriteriaVariableValue/CriteriaVariableValue";
import CriteriaVariableIndicator from "./Components/CriteriaVariable/CriteriaVariableIndicator/CriteriaVariableIndicator";

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Scans />} />
            <Route path="/criteria" element={<Criteria />}></Route>
            <Route
              path="/criteria/variable/value"
              element={<CriteriaVariableValue />}
            />
            <Route
              path="/criteria/variable/indicator"
              element={<CriteriaVariableIndicator />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;

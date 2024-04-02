import styles from "./App.module.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Scans from "./Components/Scans/Scans";
import Criteria from "./Components/Criteria/Criteria";
import CriteriaVariable from "./Components/Criteria/CriteriaVariable/CriteriaVariable";

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Scans />} />
            <Route path="/criteria" element={<Criteria />}></Route>
            <Route path="/criteria/:variable" element={<CriteriaVariable />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;

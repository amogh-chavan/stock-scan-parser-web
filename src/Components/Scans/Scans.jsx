import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./Scans.module.scss";
import Spinner from "../shared/Loader/Loader";
import { Link } from "react-router-dom";

const Scans = () => {
  // State management
  const [scansData, setStockScansData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_BASE_URL}/api/scans`
        );

        const data = [];
        response.data.data.forEach((element) => {
          data.push({
            id: element.id,
            name: element.name,
            tag: element.tag,
            color: element.color,
            criteria: element.criteria,
          });
        });

        setStockScansData(data);
        setIsLoading(false); // Update data state with response data
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      } finally {
        setIsLoading(false); // Set loading indicator to false (even on errors)
      }
    };
    fetchData();
  }, []);

  return (
    <React.Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {
            <ol className={styles.list}>
              {scansData.map((scan) => {
                return (
                  <Link key={scan.id} to={"/criteria"} state={{ scan }}>
                    <div className={styles.listItem}>
                      <div className={styles.text}>{scan.name}</div>
                      <div
                        className={styles.subText}
                        style={{ color: scan.color }}
                      >
                        {scan.tag}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </ol>
          }
        </>
      )}
    </React.Fragment>
  );
};

export default Scans;

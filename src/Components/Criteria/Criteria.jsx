import React from "react";
import styles from "./Criteria.module.scss";
import { useLocation, Link } from "react-router-dom";

const Criteria = () => {
  const location = useLocation();
  const { scan } = location.state || {};
  const { name, color, tag, criteria } = scan || {};

  const renderVariableText = (text, variable) => {
    const words = text.split(/\s+/);
    return (
      <div className={styles.element}>
        {words.map((word, index) => {
          if (word.startsWith("$")) {
            const key = word;
            const variableValue =
              variable?.[key]?.default_value ??
              variable?.[key]?.values?.[0] ??
              "";
            return (
              <Link
                to={`/criteria/variable`}
                className={styles.link}
                key={index}
                state={{ detailObject: variable?.[key] }}
              >
                ({variableValue})
              </Link>
            );
          } else {
            return <React.Fragment key={index}>{word}</React.Fragment>;
          }
        })}
      </div>
    );
  };

  return (
    <div>
      {scan && (
        <ol className={styles.list}>
          <div className={styles.header}>
            <div className={styles.text}>{name}</div>
            <div
              className={styles.subText}
              style={{ color: color, fontWeight: "bold" }}
            >
              {tag}
            </div>
          </div>
          <div className={styles.criteria}>
            {criteria?.map((element, index) => (
              <div key={index}>
                {index > 0 && <div className={styles.and}>and</div>}
                <div className={styles.element}>
                  {element?.variable
                    ? renderVariableText(element.text, element.variable)
                    : element.text}
                </div>
              </div>
            ))}
          </div>
        </ol>
      )}
    </div>
  );
};

export default Criteria;

import React from "react";
import { Card } from "antd";
import { IWidget } from "src/Components/GroupsWidget/GroupsWidget";
import styles from "./InfoWidget.module.css";

export const InfoWidget: React.FC<IWidget> = ({ teacher }) => {
  return (
    <div>
      <div>
        <div className={styles.container}>
          <h3>Сведения</h3>
          <Card size="small">
            {" "}
            <div>
              <h2
                className={styles.name}
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  margin: "auto 0",
                  width: "fit-content",
                }}
              >
                {teacher.name}
              </h2>
              {teacher.degree && (
                <h2
                  className={styles.degree}
                  style={{
                    fontSize: 18,
                    fontWeight: 600,
                    margin: "auto 0",
                    width: "fit-content",
                    marginLeft: 8,
                  }}
                >
                  ({teacher.degree})
                </h2>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

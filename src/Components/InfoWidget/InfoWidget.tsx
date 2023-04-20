import React from "react";
import { Card } from "antd";
import { IWidget } from "src/Components/GroupsWidget/GroupsWidget";
import styles from "./InfoWidget.module.css";
import { PinButton } from "../PinButton/PinButton";
import { useAppDispatch } from "src/State/hooks";
import { addPin } from "src/State/Slices/pinsSlice";

export const InfoWidget: React.FC<IWidget> = ({ teacher }) => {
  const dispatch = useAppDispatch();
  const pinTeacher = () => {
    dispatch(
      addPin({
        key: "teachers",
        item: teacher.name,
      })
    );
  };

  return (
    <div>
      <div>
        <div className={styles.container}>
          <h3>Сведения</h3>
          <Card size="small" bodyStyle={{ width: "100%" }}>
            {" "}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
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
              <div /* onClick={()=> pinTeacher()} */>
                <PinButton
                  key={teacher.name}
                  type="teachers"
                  curItem={teacher.name}
                  style={{ margin: "0 0 0 10px" }}
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

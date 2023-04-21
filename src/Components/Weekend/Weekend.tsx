import * as React from "react";
import { Card, Space } from "antd";
import styles from "./Weekend.module.css";

interface IWeekendCard {
  dayOfWeek?: string;
  reason?: string;
}

export const Weekend: React.FC<IWeekendCard> = ({
  dayOfWeek,
  reason = "Нет пар",
}) => {
  return (
    <div className={styles.container}>
      <Card
        title={
          <Space className={styles.space_antd}>
            <span>{dayOfWeek}</span>
            <span>{reason === "Нет пар" ? "Выходной" : "Вместо пар"}</span>
          </Space>
        }
      >
        <h1>{reason}</h1>
      </Card>
    </div>
  );
};

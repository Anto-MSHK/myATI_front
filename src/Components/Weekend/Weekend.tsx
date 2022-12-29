import * as React from "react";
import { Card, Space } from "antd";

interface IWeekendCard {
  dayOfWeek?: string;
}

export const Weekend: React.FC<IWeekendCard> = ({ dayOfWeek }) => {
  return (
    <div style={{ marginBottom: "20px", marginTop: "20px" }}>
      <Card
        title={
          <Space style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{dayOfWeek}</span>
            <span>Выходной</span>
          </Space>
        }
      >
        <h1
          style={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            opacity: ".7",
          }}
        >
          Нет пар
        </h1>
      </Card>
    </div>
  );
};

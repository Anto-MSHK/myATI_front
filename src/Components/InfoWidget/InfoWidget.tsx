import React from "react";
import { Card } from "antd";
import { IWidget } from "src/Components/GroupsWidget/GroupsWidget";

export const InfoWidget: React.FC<IWidget> = ({ teacher }) => {
  return (
    <div>
      <div>
        <div style={{ width: "100%", marginBottom: 10 }}>
          <h3
            style={{
              padding: "5px 0 5px 10px",
              color: "white",
              fontWeight: 500,
            }}
          >
            Сведения
          </h3>
          <Card size="small">
            {" "}
            <div style={{ display: "flex" }}>
              <h2>{teacher.name}</h2>
              {teacher.degree && (
                <h2
                  style={{
                    color: "#7a8187",
                    marginLeft: "5px",
                    fontWeight: 500,
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

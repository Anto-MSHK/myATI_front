import React from "react";
import { Button, Card, Row, Tag } from "antd";
import { Link } from "react-router-dom";
import { ITeacher } from "src/Types/TeacherTypes";

export interface IWidget {
  teacher: ITeacher;
}
export const GroupsWidget: React.FC<IWidget> = ({ teacher }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minWidth: "40%",
        maxWidth: "50%",
      }}
    >
      <div>
        <h3
          style={{
            padding: "5px 0 5px 10px",
            color: "white",
            fontWeight: 500,
          }}
        >
          Группы
        </h3>
        <Card
          bodyStyle={{ padding: 15 }}
          style={{ borderRadius: "10px 10px 0 0" }}
        >
          <Row gutter={[5, 5]} style={{ gap: 5 }} justify={"start"}>
            {" "}
            {teacher.groups &&
              teacher.groups.map((group: any) => (
                <Link to={`/schedule/${group}`}>
                  <Tag
                    color="blue"
                    style={{
                      padding: 10,
                      fontSize: 14,
                      fontWeight: 500,
                      marginBottom: 5,
                    }}
                  >
                    {group}
                  </Tag>
                </Link>
              ))}
          </Row>
        </Card>
      </div>
      <Link to={`/schedule/teacher/${teacher.name}`}>
        <Button
          type="primary"
          style={{ borderRadius: "0 0 10px 10px ", width: "100%" }}
        >
          Открыть расписание
        </Button>
      </Link>
    </div>
  );
};

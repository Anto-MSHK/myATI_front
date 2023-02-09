import React from "react";
import { Button, Card, Row, Tag } from "antd";
import { Link } from "react-router-dom";
import { ITeacher } from "src/Types/TeacherTypes";
import styles from "./GroupsWidget.module.css";
import useScreenWidth from "src/Hooks/useScreenSize";

export interface IWidget {
  teacher: ITeacher;
}
export const GroupsWidget: React.FC<IWidget> = ({ teacher }) => {
  const widthSize = useScreenWidth();
  const cutWidth = 1000;
  const mobileWidth = 600;
  return (
    <div
      className={
        widthSize > cutWidth ? styles.container : styles.containerAdapt
      }
    >
      <div>
        <h3>Группы</h3>
        <Card
          bodyStyle={{ padding: 15 }}
          style={{ borderRadius: "10px 10px 0 0" }}
        >
          <Row gutter={[5, 5]} style={{ gap: 5 }} justify={"start"}>
            {" "}
            {teacher.groups &&
              teacher.groups.map((group: any) => (
                <Link to={`/schedule/${group}`}>
                  <Tag className={styles.tag_antd} color="blue">
                    {group}
                  </Tag>
                </Link>
              ))}
          </Row>
        </Card>
      </div>
      <Link to={`/schedule/teacher/${teacher.name}`}>
        <Button className={styles.button_antd} type="primary">
          Открыть расписание
        </Button>
      </Link>
    </div>
  );
};

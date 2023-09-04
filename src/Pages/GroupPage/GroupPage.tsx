/* eslint-disable array-callback-return */
import { useEffect, useState, FC } from "react";
import {
  Alert,
  Button,
  Card,
  CollapseProps,
  Menu,
  Result,
  Row,
  theme,
} from "antd";
import { GroupCard } from "src/Components/GroupCard/GroupCard";
import { GroupStateT } from "src/Types/GroupTypes";
import { useFetchFacultyGroupsQuery } from "src/State/services/GroupsApi";
import styles from "./GroupPage.module.css";
import useScreenWidth from "src/Hooks/useScreenSize";
import { MehOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { GroupsByCourse } from "src/Components/GroupsByCourse/GroupsByCourse";
import { Collapse } from "antd";
export const GroupPage: FC<any> = ({ faculty }) => {
  const { data: facultyGroups, isLoading } = useFetchFacultyGroupsQuery({
    faculty,
  });
  const [courses, setCourses] = useState<GroupStateT[][]>([]);

  const { token } = theme.useToken();

  const panelStyle: React.CSSProperties = {};

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "1 курс",
      children: <GroupsByCourse faculty={faculty} course={1} />,
      style: panelStyle,
    },
    {
      key: "2",
      label: "2 курс",
      children: <GroupsByCourse faculty={faculty} course={2} />,
      style: panelStyle,
    },
    {
      key: "3",
      label: "3 курс",
      children: <GroupsByCourse faculty={faculty} course={3} />,
      style: panelStyle,
    },
    {
      key: "4",
      label: "4 курс",
      children: <GroupsByCourse faculty={faculty} course={4} />,
      style: panelStyle,
    },
  ];

  useEffect(() => {
    let firstCourse: GroupStateT[] = [];
    let secondCourse: GroupStateT[] = [];
    let thirdCourse: GroupStateT[] = [];
    let forthCourse: GroupStateT[] = [];

    facultyGroups?.map((group) => {
      let course = group.name.match(/[1-4]/);

      switch (course && course[0]) {
        case "1":
          firstCourse.push(group);
          break;
        case "2":
          secondCourse.push(group);
          break;
        case "3":
          thirdCourse.push(group);
          break;
        case "4":
          forthCourse.push(group);
          break;
      }
    });
    setCourses([firstCourse, secondCourse, thirdCourse, forthCourse]);
  }, [facultyGroups]);

  const widthSize = useScreenWidth();
  const cutWidth = 900;
  const mobileWidth = 600;

  return (
    <div
      style={
        widthSize < mobileWidth
          ? {
              marginTop: "10px",
              padding: "0 10px",
            }
          : {}
      }
    >
      <Alert
        closable
        style={{
          marginTop: 5,
          marginBottom: 10,
        }}
        message={
          <div
            style={{
              display: "flex",
              alignItems: widthSize > cutWidth ? "center" : "start",
              flexDirection: widthSize > cutWidth ? "row" : "column",
            }}
          >
            <p style={{ margin: 0 }}>
              Если твоей группы нет в этом списке, ты можешь написать об этом по
              любому контакту на странице{" "}
              <Link to="/respect" style={{ color: "#FAAD14" }}>
                разработчиков
              </Link>
            </p>
          </div>
        }
        type="warning"
        showIcon
      />
      {isLoading ? (
        <Card loading={true} />
      ) : (
        <div>
          <Collapse
            items={items}
            defaultActiveKey={["1"]}
            size="large"
            style={{ background: token.colorBgContainer }}
          />
        </div>
      )}
    </div>
  );
};

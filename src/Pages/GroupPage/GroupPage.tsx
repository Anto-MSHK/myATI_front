/* eslint-disable array-callback-return */
import { useEffect, useState, FC } from "react";
import { Card, Menu, Row } from "antd";
import { GroupCard } from "src/Components/GroupCard/GroupCard";
import { GroupStateT } from "src/Types/GroupTypes";
import { useFetchFacultyGroupsQuery } from "src/State/services/GroupsApi";
import styles from "./GroupPage.module.css";
import useScreenWidth from "src/Hooks/useScreenSize";

export const GroupPage: FC<any> = ({ faculty }) => {
  const { data: facultyGroups, isLoading } = useFetchFacultyGroupsQuery({
    faculty,
  });
  const [courses, setCourses] = useState<GroupStateT[][]>([]);

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
      {isLoading ? (
        <Card loading={true} />
      ) : (
        <div>
          {courses.map((course, index: number) => {
            return (
              <Card
                title={<h2 style={{ margin: "0px" }}>{++index} курс</h2>}
                size={"small"}
                style={{
                  padding: "5px",
                  borderRadius: "10px",
                  marginBottom: "10px",
                  width: "fit-content",
                }}
              >
                <Row gutter={[16, 16]} className={styles.row_antd}>
                  {course.map((group, index) => {
                    return (
                      /* Залить данные для elder с сервера по мере их появления */
                      <GroupCard
                        key={group._id + index}
                        {...group}
                        faculty={faculty}
                      />
                    );
                  })}
                </Row>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
};

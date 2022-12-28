/* eslint-disable array-callback-return */
import { useEffect, useState, FC } from "react";
import { Card, Menu, Row } from "antd";
import { GroupCard } from "src/Components/GroupCard/GroupCard";
import { GroupStateT } from "src/Types/GroupTypes";
import { useFetchFacultyGroupsQuery } from "src/State/services/GroupsApi";

export const GroupPage: FC<any> = ({ faculty }) => {
  const { data: facultyGroups, isLoading } = useFetchFacultyGroupsQuery();
  const [courses, setCourses] = useState<GroupStateT[][]>([]);
  console.log(facultyGroups);
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

  return (
    <div>
      {isLoading ? (
        <Card loading={true} />
      ) : (
        <div>
          {courses.map((course, index: number) => {
            return (
              <Menu
                style={{
                  margin: "10px",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <Card
                  size="small"
                  bordered={false}
                  title={<div className="card-title">{++index} курс</div>}
                />
                <Row gutter={[16, 16]}>
                  {course.map((group, index) => {
                    return (
                      /* Залить данные для elder с сервера по мере их появления */
                      <GroupCard key={group._id + index} {...group} />
                    );
                  })}
                </Row>
              </Menu>
            );
          })}
        </div>
      )}
    </div>
  );
};

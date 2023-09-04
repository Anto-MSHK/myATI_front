import { Result, Row, Spin } from "antd";
import React, { FC } from "react";
import { useFetchFacultyGroupsQuery } from "src/State/services/GroupsApi";
import { GroupCard } from "../GroupCard/GroupCard";
import { MehOutlined } from "@ant-design/icons";
import styles from "./GroupsByCourse.module.css";

interface GroupsByCourseI {
  faculty: string;
  course: number;
}

export const GroupsByCourse: FC<GroupsByCourseI> = ({ faculty, course }) => {
  const { data: curGroups, isLoading } = useFetchFacultyGroupsQuery({
    faculty,
    course,
  });

  return (
    <div>
      {curGroups && curGroups.length > 0 ? (
        <>
          {!isLoading ? (
            <Row gutter={[16, 16]} className={styles.row_antd}>
              {curGroups.map((group, index) => {
                return (
                  <GroupCard
                    key={group._id + index}
                    {...group}
                    faculty={faculty}
                  />
                );
              })}
            </Row>
          ) : (
            <Spin />
          )}
        </>
      ) : (
        <Result
          style={{ padding: 10 }}
          icon={<MehOutlined style={{ fontSize: 60 }} />}
          title={
            <p
              style={{
                margin: 0,
                fontSize: 20,
                marginTop: -15,
                marginBottom: -5,
              }}
            >
              К сожалению, пока нет доступа к расписанию групп этого курса
            </p>
          }
          subTitle="Уже ищем решение проблемы..."
        />
      )}
    </div>
  );
};

import { Card, Spin } from "antd";
import React from "react";
import { useFetchTeacherQuery } from "src/State/services/TeachersApi";
import { GroupsWidget } from "../GroupsWidget/GroupsWidget";
import { InfoWidget } from "../InfoWidget/InfoWidget";
import { SubjectsWidget } from "../SubjectsWidget/SubjectsWidget";
import { ITeacher } from "src/Types/TeacherTypes";

interface ITeacherCard {
  name: string;
  valueView: string;
  setValueView: React.Dispatch<React.SetStateAction<string>>;
}

export const TeacherCard: React.FC<ITeacherCard> = ({ name, setValueView }) => {
  const { data: teacher, isLoading, isFetching } = useFetchTeacherQuery(name);

  return (
    <Card
      style={{
        width: "100%",
        backgroundColor: "#001529",
        height: "100%",
        borderWidth: 0,
        position: "relative",
      }}
      bodyStyle={{
        padding: 15,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {!isFetching && teacher ? (
        <>
          <InfoWidget teacher={teacher} />
          <div style={{ display: "flex", gap: 15, height: "100%" }}>
            <GroupsWidget teacher={teacher} />
            <SubjectsWidget teacher={teacher} />
          </div>
        </>
      ) : (
        <Spin
          size="large"
          style={{
            margin: "auto 0",
            width: "100%",
          }}
        />
      )}
    </Card>
  );
};

import { Card } from "antd";
import React from "react";
import { useState } from "react";
import { useFetchTeacherQuery } from "src/State/services/TeachersApi";
import { useFetchTeacherScheduleQuery } from "src/State/services/ScheduleApi";
import {GroupsWidget} from "../GroupsWidget/GroupsWidget";
import { InfoWidget } from "../InfoWidget/InfoWidget";
import {SubjectsWidget} from "../SubjectsWidget/SubjectsWidget";


interface ITeacherCard {
  name: string,
  valueView: string,
  setValueView: React.Dispatch<React.SetStateAction<string>>
}


export const TeacherCard: React.FC<ITeacherCard> = ({ name, setValueView}) => {

  const { data: teacher, isLoading, isFetching } = useFetchTeacherQuery(name)
  const [isSheduleActive, setIsScheduleActive] = useState(false)  
  const { data: teacherSchedule} = useFetchTeacherScheduleQuery(name)
  
  return (
    <Card
      loading={isFetching}
      style={{
        width: "100%",
        backgroundColor: "#001529",
        height: "100%",
        borderWidth: 0,
      }}
      bodyStyle={{
        padding: 15,
      }}
    >
        <InfoWidget name={name} degree={teacher?.degree}/>
        <div style={{display: "flex", gap: 15, height: "100%"}}>
            <GroupsWidget data={teacher}/>
            <SubjectsWidget data={teacher}/>
        </div>
    </Card>
  );
};

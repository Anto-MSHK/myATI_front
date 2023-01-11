import React, { useState, useEffect, useCallback } from "react";
import { Card, Switch, Space, Input, Select } from "antd";
import { ITeacher } from "src/Types/TeacherTypes";
import { useFetchTeachersQuery } from "src/State/services/TeachersApi";
import { TeachersList } from "src/Components/TeachersList/TeachersList";
import { TeacherCard } from "src/Components/TeacherCard/TeacherCard";
import { TopDotEdu } from "src/Components/TopDotEdu/TopDotEdu";
import "./TeacherInfoPage.css";
import { useParams } from 'react-router-dom';


export const TeacherInfoPage: React.FC = () => {

  const {teacherName} = useParams()
  const { data: fetchedTeachers, isLoading } = useFetchTeachersQuery(135);
  const [teachers, setTeachers] = useState<ITeacher[]>([]);
  const [selectedTeacher, setSelectedTeacher] = useState("");

  useEffect(() => {
    if (teachers.length) setSelectedTeacher(teachers[0].name);
  }, [teachers]);

  useEffect(() => {
    if (fetchedTeachers?.length) {
      setSelectedTeacher(fetchedTeachers[0].name);
      setTeachers(fetchedTeachers);
    }
  }, [fetchedTeachers]);

  const sortTeachers = (sort: string) => {
    if (sort === "По алфавиту") {
      setTeachers([...teachers].sort((a, b) => a.name.localeCompare(b.name)));
      return;
    }
    setTeachers([...teachers].sort((a, b) => b.name.localeCompare(a.name)));
  };

  const onSearch = useCallback(
    (searchQuery: string) => {
      console.log("вызвана функция поиска");
      if (searchQuery) {
        setTeachers(
          [...teachers].filter((teacher) =>
            teacher.name.toLowerCase().includes(searchQuery.toLocaleLowerCase())
          )
        );
      } else fetchedTeachers ? setTeachers(fetchedTeachers) : setTeachers([]);

      console.log(teachers);
    },
    [teachers]
  );

  return (
    <>
      <TopDotEdu
        sortTeachers={sortTeachers}
        onSearch={onSearch}
        title={"Преподаватели"}
      />
      <Card
        loading={isLoading}
        style={{
          //  width: "100%",
          position: "relative",
          borderRadius: "0 0 10px 10px",
          paddingTop: "3px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
          margin: "0px 15px",
        }}
        bodyStyle={{ padding: "10px 10px 10px 10px" }}
      >
        <div className="main-teachers">
          {teachers.length ? (
            <>
              <div className="menu-wrapper-teachers">
                <TeachersList teachersList={teachers} selectedTeacher = {teacherName}/>
              </div>
              {selectedTeacher && (
                <div style={{ marginLeft: 10, width: "100%" }}>
                
               {
                teacherName &&
                <TeacherCard name={teacherName} />
 
              }                   
                </div>
              )}
            </>
          ) : (
            <h3
              style={{
                textAlign: "center",
                alignItems: "center",
                margin: "0 auto",
              }}
            >
              Преподаватели не найдены
            </h3>
          )}
        </div>
      </Card>
    </>
  );
};

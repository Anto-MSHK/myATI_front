import React, { useState, useEffect, useCallback } from "react";
import { Card, Switch, Space, Input, Select } from "antd";
import { ITeacher } from "src/Types/TeacherTypes";
import { useFetchTeachersQuery } from "src/State/services/TeachersApi";
import { TeachersList } from "src/Components/TeachersList/TeachersList";
import { TeacherCard } from "src/Components/TeacherCard/TeacherCard";
import { TopDotEdu } from "src/Components/TopDotEdu/TopDotEdu";
import "./TeacherInfoPage.css";
import { useParams } from "react-router-dom";
import { TopDot } from "src/Components/TopDot/TopDot";
import { UserOutlined } from "@ant-design/icons";

export const TeacherInfoPage: React.FC = () => {
  const { teacherName } = useParams();
  const { data: fetchedTeachers, isLoading } = useFetchTeachersQuery();
  const [teachers, setTeachers] = useState<ITeacher[]>([]);
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const [valueView, setValueView] = useState("info");

  useEffect(() => {
    console.log(teacherName);
    if (teachers.length && teacherName) setSelectedTeacher(teacherName);
  }, []);

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
        title={"Преподаватели"}
        sortTeachers={sortTeachers}
        onSearch={onSearch}
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
                <TeachersList
                  teachersList={teachers}
                  selectedTeacher={teacherName}
                />
              </div>
              {selectedTeacher && (
                <div style={{ marginLeft: 10, width: "100%" }}>
                  {teacherName ? (
                    <TeacherCard
                      name={teacherName}
                      valueView={valueView}
                      setValueView={setValueView}
                    />
                  ) : (
                    <Card
                      style={{
                        width: "100%",
                        backgroundColor: "#001529",
                        borderWidth: 0,
                        height: "100%",
                      }}
                      bodyStyle={{
                        height: "100%",
                        display: "flex",
                      }}
                    >
                      <h2
                        style={{
                          fontWeight: 400,
                          fontSize: 24,
                          color: "white",
                          width: "100%",
                          textAlign: "center",
                          margin: "auto",
                        }}
                      >
                        <UserOutlined style={{ fontSize: 45 }} />
                        <p style={{ margin: 0 }}>выберите из списка</p>
                      </h2>
                    </Card>
                  )}
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
